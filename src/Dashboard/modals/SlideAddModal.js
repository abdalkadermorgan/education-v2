import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SlideAddModal(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const slide = {
      title: titleRef.current.value,
      image_id: selectedFile,
    };
    console.log("slide for =>", slide);
    props.onAddSlide(slide);
    handleClose();
  };

  const initialValues = { title: "", image_id: parseInt("") };

  async function onFileChange(event) {
    console.log("11111111111", event.target.files[0]);

    let formData = new FormData();
    formData.append("file", event.target.files[0]);

    // Details of the uploaded file
    console.log("2222222222", formData);

    // send request
    const response = await fetch("/api/file/upload", {
      method: "POST",
      body: formData,
    });
    const res = await response.json();
    const imgId = res.data;
    console.log("res imag => ", res);
    console.log("res id => ", imgId);
    setSelectedFile(imgId);
  }

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
              initialValues={initialValues}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form onSubmit={submitHandler}>
                <input
                  id="slideTitle"
                  name="sTitle"
                  placeholder="Title"
                  ref={titleRef}
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
                  <Button variant="primary" type="submit">
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

export default SlideAddModal;
