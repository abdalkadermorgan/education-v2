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

	const [courses, setCourses] = useState([]);
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

			const res = await response.json();

			console.log(res.data.data);

			const loadedCourses = res.data.data;
			
			// for(const key in data) {
			// 	loadedCourses.push({
			// 		id: key,
			// 		title: data[key].title,
			// 		category: data[key].category,
			// 		price:data[key].price,
			// 		discount: data[key].discount,
			// 		description: data[key].description,
			// 	});
			// }
			console.log("load =>" , loadedCourses);
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
		console.log(res);
	}

	let content = <div></div>;

	if (courses.length > 0) {
		content= "";
	}

	if (error) {
	  content = <p>{error}</p>;
	}
  
	if (isLoading) {
	  content = <p className="" >Loading...</p>;
	}




	// const { courses } = useSelector((state) => state);
	// const dispatch = useDispatch();

	// const [state, setState] = useState({
	// 	id: "",
	// 	title: "",
	// 	description: "",
	// 	urlImg: "",
	// 	catigory: "",
	// 	price: "",
	// 	discount: "",
	// });

	// const onEdit = (course) => {
	// 	handleShow(true);
	// 	setState(course);
	// };
	// const onEditcourse = () => {
	// 	dispatch(
	// 		Actions.SetCourses(
	// 			courses.map((course) => {
	// 				if (course.id === state.id) {
	// 					course = state;
	// 				}
	// 				return course;
	// 			})
	// 		)
	// 	);

	// 	setState((s) => ({ title: "", description: "", urlImg: "", catigory: "", price: "", discount: "", id: "" }));
	// 	stopEditingHandler();
	// };

	// const stopEditingHandler = () => {
	// 	setShow(false);
	// };

	// const onDeleteCourse = (id) => {
	// 	dispatch(Actions.SetCourses(courses.filter((e) => e.id !== id)));
	// 	setShowDel(false);
	// };

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
							
							<td>{index+1}</td>
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
								<>
									<Button variant="link primary edit" 
									// onClick={() => onEdit(course)}
									>
										Edit
									</Button>

									{/* <Modal show={show} onHide={handleClose} animation={false}>
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
									</Modal> */}
								</>
								<>
									<Button variant="link danger del" 
									// onClick={handleShowDel}
									>
										Del
									</Button>

									{/* <Modal show={showDel} onHide={handleCloseDel} animation={false}>
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
									</Modal> */}
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
