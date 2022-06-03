import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseItemForm from "../components/Course/CourseItemForm";

const SingleCourse = () => {
	const { id } = useParams();
	const { courses } = useSelector((state) => state);
	const course = courses.find((course) => course.id === id);

	return (
		<div>
			<Container>
				<div className="col-9">
					<div className="single-course-img">
						<img src={course.urlImg} alt="" />
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
