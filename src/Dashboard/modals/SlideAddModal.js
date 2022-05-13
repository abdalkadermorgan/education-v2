import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormSlide from '../Forms/FormSlide';

function SlideAddModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
              <FormSlide />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<SlideAddModal />);

  export default SlideAddModal;