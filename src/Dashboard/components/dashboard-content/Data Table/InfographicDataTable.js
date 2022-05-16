import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../../store/store";
import InfographicAddModal from "../../../modals/InfographicAddModal";
import InfographicDeleteModal from "../../../modals/InfographicDeleteModal";
import InfographicEditModal from "../../../modals/InfographicEditModal";

const InfographicDataTable = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showDel, setShowDel] = useState(false);
	const handleCloseDel = () => setShowDel(false);
	const handleShowDel = () => setShowDel(true);

	const { infographics } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [state, setState] = useState({
		id: "",
		students: "",
		available: "",
		products: "",
		teachers: "",
	});

	const onEdit = (info) => {
		handleShow(true);
		setState(info);
	};
	const onEditInfo = () => {
		dispatch(
			Actions.SetInfoGraphic(
				infographics.map((info) => {
					if (info.id === state.id) {
						info = state;
					}
					return info;
				}),
			),
		);

		setState((s) => ({
			students: "",
			available: "",
			products: "",
			teachers: "",
			id: "",
		}));
		stopEditingHandler();
	};

	const stopEditingHandler = () => {
		setShow(false);
	};

	const onDeleteinfo = (id) => {
		dispatch(Actions.SetInfoGraphic(infographics.filter((e) => e.id !== id)));
		setShowDel(false);
	};

	return (
		<div className="dashboard-content">
			<div className="d-flex mb-3 justify-content-end">
				<InfographicAddModal />
			</div>
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Students Enrolled</th>
						<th>Online Available Courses</th>
						<th>Premium Quality Products</th>
						<th>Teachers Registered</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{infographics.map((info, index) => (
						<tr key={`info-${index}`}>
							<td>1</td>
							<td>{info.students}</td>
							<td>{info.available}</td>
							<td>{info.products}</td>
							<td>{info.teachers}</td>
							<td>
								<>
									<Button
										variant="link primary edit"
										onClick={() => onEdit(info)}
									>
										Edit
									</Button>

									<Modal show={show} onHide={handleClose} animation={false}>
										<Modal.Header closeButton>
											<Modal.Title>Edit Info Graphic</Modal.Title>
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
																setState((s) => ({
																	...s,
																	students: e.target.value,
																}))
															}
															value={state.students}
														/>

														<Field
															id="courses"
															name="courses"
															placeholder="Online Available Courses"
															type="number"
															onChange={(e) =>
																setState((s) => ({
																	...s,
																	available: e.target.value,
																}))
															}
															value={state.available}
														/>

														<Field
															id="quality"
															name="quality"
															placeholder="Premium Quality Products"
															type="number"
															onChange={(e) =>
																setState((s) => ({
																	...s,
																	products: e.target.value,
																}))
															}
															value={state.products}
														/>

														<Field
															id="teachers"
															name="teachers"
															placeholder="Teachers Registered"
															type="number"
															onChange={(e) =>
																setState((s) => ({
																	...s,
																	teachers: e.target.value,
																}))
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
											<Button variant="primary" onClick={onEditInfo}>
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
											<Modal.Title>Delete Info Graphic</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											Are you sure to delete this Info graphic?
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleCloseDel}>
												Close
											</Button>
											<Button variant="primary" onClick={() => onDeleteinfo(info.id)}>
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
};

export default InfographicDataTable;
