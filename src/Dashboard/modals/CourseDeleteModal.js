import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/store';

function CourseDeleteModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { courses } = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const onDeleteCourse = (id) => {
      dispatch(Actions.SetCourses(courses.filter((e) => e.id !== id)));
      setShow(false);
    };
  
    return courses.map((course, _index) => (
      <>
        <Button variant="link danger del" onClick={handleShow}>
          Del
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Slider</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Are you sure to delete this Slide?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => onDeleteCourse(course.id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ));
  }
  

  export default CourseDeleteModal;