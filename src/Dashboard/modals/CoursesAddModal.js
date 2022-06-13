import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import { Actions } from '../../store/store';
// import { v4 as uuid } from "uuid";
// import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

const CoursesAddModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [state, setState] = useState({
  //   title: "",
  //   description: "",
  //   urlImg: "",
  //   catigory: "",
  //   price: "",
  //   discount: "",
  // });


  // const { courses } = useSelector((state) => state);


  // const dispatch = useDispatch();

  // const addNewCourse = () => {
  //   dispatch(Actions.SetCourses([...courses, { ...state, id: uuid() }]));
  //   handleClose();
  // };


  const titleRef = useRef('');
  const categoryRef = useRef('');
  const priceRef = useRef('');
  const discountRef = useRef('');
  const descriptionRef = useRef('');
  const imgRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();

    const course = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      discount: discountRef.current.value,
      description: descriptionRef.current.value,
      image_id: imgRef.current.value
    };

    props.onAddCourse(course);
    handleClose();
  }

  const initialValues = { title: '', category: '', price: '', discount: '', description: '', image_id: '' }


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
              initialValues={initialValues}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form onSubmit={submitHandler}>
                <input
                  id="courseTitle"
                  name="cTitle"
                  placeholder="Title"
                  // onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
                  // value={state.title}
                  ref={titleRef}
                />

                <input
                  id="category"
                  name="category"
                  placeholder="Category"
                  // onChange={(e) =>
                  //   setState((s) => ({ ...s, catigory: e.target.value }))
                  // }
                  // value={state.catigory}
                  ref={categoryRef}
                />

                <input
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  // onChange={(e) => setState((s) => ({ ...s, price: parseInt(e.target.value) }))}
                  // value={state.price}
                  ref={priceRef}
                />

                <input
                  id="discount"
                  name="discount"
                  placeholder="Discount"
                  type="number"
                  // onChange={(e) =>
                  // 	setState((s) => ({ ...s, discount: e.target.value }))
                  // }
                  // value={state.discount}
                  ref={discountRef}
                />

                <textarea
                  as="textarea"
                  id="discrption"
                  name="discrption"
                  placeholder="Discription"
                  type="number"
                  // onChange={(e) =>
                  // 	setState((s) => ({ ...s, description: e.target.value }))
                  // }
                  // value={state.description}
                  ref={descriptionRef}

                />

                <input
                  id="img"
                  name="img"
                  placeholder="URL Image"
                  type="text"
                  // onChange={(e) =>
                  // 	setState((s) => ({ ...s, urlImg: e.target.value }))
                  // }
                  // value={state.urlImg}
                  ref={imgRef}
                />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button type='submit' variant="primary"
                  // onClick={addNewCourse}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Formik>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}


export default CoursesAddModal;