import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Actions } from '../../store/store';
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

function CoursesAddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    id:"",
    title: "",
    description: "",
    urlImg: "",
    catigory: "",
    price: "",
    discount: "",
  });


  const { courses } = useSelector((state) => state);


  const dispatch = useDispatch();

  const addNewCourse = () => {
    dispatch(Actions.SetCourses([...courses, { ...state, id: uuid() }]));
    handleClose();
  };



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
              }}
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
          <Button type='submit' variant="primary" onClick={addNewCourse}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CoursesAddModal;