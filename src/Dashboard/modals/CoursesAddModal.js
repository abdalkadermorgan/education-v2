import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form, Formik } from 'formik';

const CoursesAddModal = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleRef = useRef('');
  const categoryRef = useRef('');
  const priceRef = useRef('');
  const discountRef = useRef('');
  const descriptionRef = useRef('');
  // const imgRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();

    const course = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      discount: discountRef.current.value,
      description: descriptionRef.current.value,
      image_id: selectedFile,
    };
    console.log("course for =>", course);
    props.onAddCourse(course);
    handleClose();
  }





  const initialValues = { title: '', category: '', price: '', discount: '', description: '', image_id: parseInt('') }

  async function onFileChange(event) {

    console.log("11111111111", event.target.files[0]);

    let formData = new FormData();
    formData.append('file', event.target.files[0]);

    // Details of the uploaded file 
    console.log("2222222222", formData);

    // send request
    const response = await fetch('/api/file/upload', {
      method: "POST",
      body:formData,
    
    });
    const res = await response.json();
    const imgId = res.data
    console.log("res imag => ", res);
    console.log("res id => ", imgId);
    setSelectedFile(imgId);
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
                  ref={titleRef}
                />

                <input
                  id="category"
                  name="category"
                  placeholder="Category"
                  ref={categoryRef}
                />

                <input
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  ref={priceRef}
                />

                <input
                  id="discount"
                  name="discount"
                  placeholder="Discount"
                  type="number"
                  ref={discountRef}
                />

                <textarea
                  as="textarea"
                  id="discrption"
                  name="discrption"
                  placeholder="Discription"
                  type="number"
                  ref={descriptionRef}

                />

                <input
                  onChange={onFileChange}
                  id="img"
                  name="file"
                  type="file"
                  // ref={imgRef}
                  
                />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button type='submit' variant="primary"
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