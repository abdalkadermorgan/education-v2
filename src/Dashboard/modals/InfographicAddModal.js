import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormInfographic from '../Forms/FormInfographic';

function InfographicAddModal() {
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
            <Modal.Title>Add New Info Graphic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormInfographic />
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
  

  export default InfographicAddModal;