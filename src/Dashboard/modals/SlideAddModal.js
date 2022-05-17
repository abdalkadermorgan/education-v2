import { Field, Form, Formik } from 'formik';
import { v4 as uuid } from "uuid";
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/store';

function SlideAddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    id:"",
    title: "",
    urlImg: "",
  });


  const { sliders } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addNewSlide = () => {
    dispatch(Actions.setSliders([...sliders, { ...state, id: uuid() }]));
    handleClose();
  };



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Slide</Modal.Title>
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
                  onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
                  value={state.name}
                />

                <Field
                  id="img"
                  name="img"
                  placeholder="URL Image"
                  type="text"
                  onChange={(e) => setState((s) => ({ ...s, urlImg: e.target.value }))}
                  value={state.url}
                />
              </Form>
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewSlide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default SlideAddModal;