import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../../store/store";
import SlideAddModal from "../../../modals/SlideAddModal";

const SlideDataTable = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showDel, setShowDel] = useState(false);
	const handleCloseDel = () => setShowDel(false);
	const handleShowDel = () => setShowDel(true);

	const { sliders } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [state, setState] = useState({
		title: "",
		urlImg: "",
	});

	const onEdit = (slide) => {
		handleShow(true);
		setState(slide);
	};
	const onEditslide = () => {
		dispatch(
			Actions.setSliders(
				sliders.map((slide) => {
					if (slide.id === state.id) {
						slide = state;
					}
					return slide;
				})
			)
		);

		setState((s) => ({ title: "", urlImg: "", id: "" }));
		stopEditingHandler();
	};

	const stopEditingHandler = () => {
		setShow(false);
	};

	const onDeleteSlide = (id) => {
		dispatch(Actions.setSliders(sliders.filter((e) => e.id !== id)));
		handleCloseDel();
	  };

	return (
		<div className="dashboard-content">
			<div className="d-flex mb-3 justify-content-end">
				<SlideAddModal />
			</div>
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Title</th>
						<th>Action</th>

					</tr>
				</thead>
				<tbody>
					{sliders.map((slide, index) =>
						<tr key={`slide-${index}`}>
							<td>1</td>
							<td>
								<img
									src={slide.urlImg}
									width={50}
									height={50}
									alt=""
								/>
							</td>
							<td>{slide.title}</td>
							<td>
								<>
									<Button variant="link primary edit" onClick={() => onEdit(slide)}>
										Edit
									</Button>

									<Modal show={show} onHide={handleClose} animation={false}>
										<Modal.Header closeButton>
											<Modal.Title>Edit Slide</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<div>
												<Formik
													initialValues={{
														slideTitle: '',
														img: '',
													}}
													onSubmit={async (values) => {
														await new Promise((r) => setTimeout(r, 500));
														alert(JSON.stringify(values, null, 2));
													}}
												>
													<Form>
														<Field
															id="slideTitle"
															name="slideTitle"
															placeholder="Title"
															onChange={(e) =>
																setState((s) => ({ ...s, title: e.target.value }))
															}
															value={state.title}
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
											<Button variant="primary" onClick={onEditslide}>
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
											<Modal.Title>Delete Slide</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											Are you sure to delete this slide?
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleCloseDel}>
												Close
											</Button>
											<Button variant="primary" onClick={() => onDeleteSlide(slide.id)}>
												Save Changes
											</Button>
										</Modal.Footer>
									</Modal>
								</>
							</td>
						</tr>
					)}
				</tbody>
			</Table>

		</div>
	);
};

export default SlideDataTable;
