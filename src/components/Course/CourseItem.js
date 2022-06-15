import { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseItemForm from "./CourseItemForm";

const CourseItem = () => {

	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchCoursesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`/api/admin/courses`);

			if (!response.ok) {
				throw new Error("wrong!");
			}

			const res = await response.json();

			const loadedCourses = res.data.data;
			const totalCourses = res.data.total;
			console.log("total", totalCourses);

			setCourses(loadedCourses);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchCoursesHandler();
	}, [fetchCoursesHandler]);


	if (error) {
		return <p>{error}</p>;
	}

	if (isLoading) {
		return <p className="">Loading...</p>;
	}

	// const total = courses.reduce(course,tot);

	return courses.map((course, index) => (
				<Card key={`course-homne-${index}`}>
					<div className="card-img">
						<Card.Img variant="top" src={course.image_url} />
					</div>
					<Card.Body>
						<div className="cart-catigory">{course.category}</div>
						<Link to={`/course/${course.id}`}>
							<Card.Title>{course.title}</Card.Title>
						</Link>
						<div className="prices">
							<div className="discount">{course.discount} $</div>
							<div className="price">{course.price} $</div>
						</div>
						<CourseItemForm course={course} />
					</Card.Body>
				</Card>
			))
		}

export default CourseItem;
