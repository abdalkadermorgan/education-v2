import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../store/store";


const CourseItemForm = (props) => {
	
	const { cart } = useSelector((state) => state);

	const [disabled,setDisabled] = useState(false);
	const dispatch = useDispatch();

	const addCourseToCart = (course) => {
		if(cart.find(e => e.id === course.id)) {
			return setDisabled(true)
			
		} else {
			dispatch(Actions.SetAddedCart([...cart, course]));
		}
	};
    console.log("cart", cart);

	return (
		<Button
			disabled={disabled}
			className="btn btn-primary mt-3" variant="danger"
			onClick={() => addCourseToCart(props.course)}
			
		>
			Add To Card
		</Button>
	);
};

export default CourseItemForm;
