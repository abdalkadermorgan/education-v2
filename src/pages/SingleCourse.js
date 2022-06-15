import { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CourseItemForm from "../components/Course/CourseItemForm";

const SingleCourse = () => {
	const { id } = useParams();
	const [course, setCourse] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchCoursesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`/api/admin/courses/${id}`);

			if (!response.ok) {
				throw new Error("wrong!");
			}

			const res = await response.json();

			const loadedCourses = res.data;
			setCourse(loadedCourses);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchCoursesHandler();
	}, [id, fetchCoursesHandler]);
	
	if (isLoading) {
		return <p className="">Loading...</p>;
	}


	if (error) {
		return <p>{error}</p>;
	}


	return (
		<div>
			<Container>
				<div className="col-9">
					<div className="single-course-img">
						<img src={course.image_url} alt="" />
					</div>
				</div>
				<Row>
					<div className="col-lg-9">
						<div className="single-course-detalis">
							<h1>{course.title}</h1>
							<p>{course.description}</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="single-course-price">
							<h3>Price</h3>
							<div className="d-flex justify-content-between">
								<span>{course.price}$</span>
								<span className="discount">{course.discount}$</span>
							</div>
						</div>
						<CourseItemForm />
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default SingleCourse;
