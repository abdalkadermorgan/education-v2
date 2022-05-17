import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../../store/store';

function CourseDeleteModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { sliders } = useSelector((state) => state);
    const dispatch = useDispatch();
  
  
    const onDeleteSlide = (id) => {
      dispatch(Actions.setSliders(sliders.filter((e) => e.id !== id)));
    };


  
  
    return sliders.map((slide) => (
      <>
        <Button variant="link danger del" onClick={handleShow}>
          Del
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Slide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Are you sure to delete this slide?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => onDeleteSlide(slide.id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ));
  }
  
  export default CourseDeleteModal;