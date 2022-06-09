import { useCallback, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CoursesAddModal from "../../../modals/CoursesAddModal";
import { Actions } from "../../../../store/store";

const CourseDataTable = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showDel, setShowDel] = useState(false);
	const handleCloseDel = () => setShowDel(false);
	const handleShowDel = () => setShowDel(true);

	const [course, setCourse] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchCoursesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('/api/admin/courses');
			if (!response.ok) {
				throw new Error ('wrong!')
			}

			const data = await response.json();

			const loadedCourses = [];

			for(const key in data) {
				loadedCourses.push({
					id: key,
					title: data[key].title,
					category: data[key].category,
					price:data[key].price,
					discount: data[key].discount,
					description: data[key].description,
				});
			}
			setCourse(loadedCourses);
			
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchCoursesHandler();
	}, [fetchCoursesHandler]);






	const { courses } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [state, setState] = useState({
		id: "",
		title: "",
		description: "",
		urlImg: "",
		catigory: "",
		price: "",
		discount: "",
	});

	const onEdit = (course) => {
		handleShow(true);
		setState(course);
	};
	const onEditcourse = () => {
		dispatch(
			Actions.SetCourses(
				courses.map((course) => {
					if (course.id === state.id) {
						course = state;
					}
					return course;
				})
			)
		);

		setState((s) => ({ title: "", description: "", urlImg: "", catigory: "", price: "", discount: "", id: "" }));
		stopEditingHandler();
	};

	const stopEditingHandler = () => {
		setShow(false);
	};

	const onDeleteCourse = (id) => {
		dispatch(Actions.SetCourses(courses.filter((e) => e.id !== id)));
		setShowDel(false);
	};

	return (

		<div className="dashboard-content">
			<div className="d-flex mb-3 justify-content-end">
				<CoursesAddModal />
			</div>
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
							<td>1</td>
							<td>
								<img
									src={course.urlImg}
									width={50}
									height={50}
									alt=""
								/>
							</td>
							<td>{course.title}</td>
							<td>{course.catigory}</td>
							<td>{course.price}</td>
							<td>{course.discount}</td>
							<td>
								<>
									<Button variant="link primary edit" onClick={() => onEdit(course)}>
										Edit
									</Button>

									<Modal show={show} onHide={handleClose} animation={false}>
										<Modal.Header closeButton>
											<Modal.Title>Edit Course</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<div>
												<Formik
													onSubmit={async (values) => {
														await new Promise((r) => setTimeout(r, 500));
														alert(JSON.stringify(values, null, 2));
													}}
												>
													<Form>
														<Field
															id="courseTitle"
															name="cTitle"
															placeholder="Title"
															onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
															value={state.title}
														/>

														<Field
															id="category"
															name="category"
															placeholder="Category"
															onChange={(e) =>
																setState((s) => ({ ...s, catigory: e.target.value }))
															}
															value={state.catigory}
														/>

														<Field
															id="price"
															name="price"
															placeholder="Price"
															type="number"
															onChange={(e) => setState((s) => ({ ...s, price: parseInt(e.target.value) }))}
															value={state.price}
														/>

														<Field
															id="discount"
															name="discount"
															placeholder="Discount"
															type="number"
															onChange={(e) =>
																setState((s) => ({ ...s, discount: e.target.value }))
															}
															value={state.discount}
														/>

														<Field
															as="textarea"
															id="discrption"
															name="discrption"
															placeholder="Discription"
															type="number"
															onChange={(e) =>
																setState((s) => ({ ...s, description: e.target.value }))
															}
															value={state.description}

														/>

														<Field
															id="img"
															name="img"
															placeholder="URL Image"
															type="text"
															onChange={(e) =>
																setState((s) => ({ ...s, urlImg: e.target.value }))
															}
															value={state.urlImg}
														/>
													</Form>
												</Formik>
											</div>
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
											<Button variant="primary" onClick={onEditcourse}>
												Save Changes
											</Button>
										</Modal.Footer>
									</Modal>
								</>
								<>
									<Button variant="link danger del" onClick={handleShowDel}>
										Del
									</Button>

									<Modal show={showDel} onHide={handleCloseDel} animation={false}>
										<Modal.Header closeButton>
											<Modal.Title>Delete Course</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											Are you sure to delete this Course?
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleCloseDel}>
												Close
											</Button>
											<Button variant="primary" onClick={() => onDeleteCourse(course.id)}>
												Delete
											</Button>
										</Modal.Footer>
									</Modal>
								</>
							</td>
						</tr>

					))}
				</tbody>
			</Table>

		</div>
	);
}

export default CourseDataTable;
