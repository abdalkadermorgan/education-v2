import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';

import { Field, Form, Formik } from "formik";
import { images } from "../assets/images";
import AuthContext from '../store/auth-context';
import Input from '../components/UI/Input';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }

    return { value: '', isValid: false };
};



const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }

    return { value: '', isValid: false };
};



const Login = (props) => {

	const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        console.log('EFFECT RUNNING');

        const storedUserLogged = localStorage.getItem('isLoggedIn');

        if (storedUserLogged === '1') {
            window.location.pathname = "/";
        }


        return () => {
            console.log('EFFECT CLEANUP');

        };

    }, [])

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('checking')
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        return () => {
            console.log('Cleanup');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };
    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };


    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    }

    const submitHandler = (event) => {


        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

	return (
		<div className="login-form">
			<img src={images.logo} alt="Logo" />
			<h2>Sign in to your account</h2>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form 
                onSubmit={submitHandler}
                >
					<Input
						ref={emailInputRef}
						id="email"
						name="email"
						placeholder="Enter Your Email"
						type="email"
						value={emailState.value}
						isValid={emailIsValid}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>

					<Input
						ref={passwordInputRef}
						id="password"
						name="password"
						placeholder="Enter Your Password"
						type="password"
						value={passwordState.value}
						isValid={passwordIsValid}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
					<button type="submit" 
                    disabled={!formIsValid}
                    
                    >
						Sign in
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
