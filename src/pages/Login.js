import { Field, Form, Formik } from "formik";
import { images } from "../assets/images";

const Login = () => {
    return (

        <div className="login-form">
            <img src={images.logo} alt="Logo"/>
            <h2>Sign in to your account</h2>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        type="email"
                    />

                    <Field
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        type="password"
                    />
                    <button type="submit">Sign in</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;