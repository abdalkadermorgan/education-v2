import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormInfographic from '../Forms/FormInfographic';

function InfographicEditModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link primary edit" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Info Graphic</Modal.Title>
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
  
  render(<InfographicEditModal />);

  export default InfographicEditModal;