import { useCallback, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CoursesAddModal from "../../../modals/CoursesAddModal";
import { Actions } from "../../../../store/store";
import DeleteModal from "../../../modals/modal-del/DeleteModal";

const CourseDataTable = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showDel, setShowDel] = useState(false);
	const handleCloseDel = () => setShowDel(false);
	const handleShowDel = () => setShowDel(true);

	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchCoursesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('/api/admin/courses');
			if (!response.ok) {
				throw new Error('wrong!')
			}

			const res = await response.json();

			console.log(res.data.data);

			const loadedCourses = res.data.data;

			console.log("load =>", loadedCourses);
			setCourses(loadedCourses);

		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchCoursesHandler();
	}, [fetchCoursesHandler]);

	async function addCourseHandler(course) {
		const response = await fetch('/api/admin/courses', {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const res = await response.json();
		console.log("res => ", res);
	}

	let content = <div></div>;

	if (courses.length > 0) {
		content = "";
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p className="" >Loading...</p>;
	}


	async function onDeleteCourse(id) {

		console.log("id => ", id);
		return;

		const response = await fetch('/api/admin/courses/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const res = await response.json();
		console.log("res => ", res);
	};




	return (

		<div className="dashboard-content">
			<div className="d-flex mb-3 justify-content-end">
				<CoursesAddModal onAddCourse={addCourseHandler} />
			</div>
			{content}
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Title</th>
						<th>Catigory</th>
						<th>Price</th>
						<th>Discounts</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{courses.map((course, index) => (
						<tr key={`course-${index}`}>
							<td>{index + 1}</td>
							<td>
								<img
									src={course.image_url}
									width={50}
									height={50}
									alt=""
								/>
							</td>
							<td>{course.title}</td>
							<td>{course.category}</td>
							<td>{course.price}</td>
							<td>{course.discount}</td>
							<td>
									<Button variant="link primary edit"
									// onClick={() => onEdit(course)}
									>
										Edit
									</Button>
								<Button variant="link danger del"
									onClick={handleShowDel}
								>
									Del
								</Button>
								<DeleteModal />
							</td>
						</tr>

					))}
				</tbody>
			</Table>

		</div>
	);
}

export default CourseDataTable;
