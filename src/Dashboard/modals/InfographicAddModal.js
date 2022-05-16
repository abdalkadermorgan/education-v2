import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../store/store";
import { v4 as uuid } from "uuid";

function InfographicAddModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [state, setState] = useState({
		students: "",
		available: "",
		products: "",
		teachers: "",
	});

	const { infographics } = useSelector((state) => state);

	const dispatch = useDispatch();

	const addNewInfo = () => {
		dispatch(Actions.SetInfoGraphic([...infographics, { ...state, id: uuid() }]));
		handleClose();
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				add
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Info Graphic</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Formik
							initialValues={{}}
							onSubmit={async (values) => {
								await new Promise((r) => setTimeout(r, 500));
								alert(JSON.stringify(values, null, 2));
							}}
						>
							<Form>
								<Field
									id="students"
									name="students"
									placeholder="Students Enrolled"
									type="number"
									onChange={(e) =>
										setState((s) => ({ ...s, students: e.target.value }))
									}
									value={state.students}
								/>

								<Field
									id="courses"
									name="courses"
									placeholder="Online Available Courses"
									type="number"
									onChange={(e) =>
										setState((s) => ({ ...s, available: e.target.value }))
									}
									value={state.available}
								/>

								<Field
									id="quality"
									name="quality"
									placeholder="Premium Quality Products"
									type="number"
									onChange={(e) =>
										setState((s) => ({ ...s, products: e.target.value }))
									}
									value={state.products}
								/>

								<Field
									id="teachers"
									name="teachers"
									placeholder="Teachers Registered"
									type="number"
									onChange={(e) =>
										setState((s) => ({ ...s, teachers: e.target.value }))
									}
									value={state.teachers}
								/>
							</Form>
						</Formik>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={addNewInfo}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default InfographicAddModal;
