import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function InfographicDeleteModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link danger del" onClick={handleShow}>
          Del
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Info Graphic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Are you sure to delete this Info graphic?
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
  
  render(<InfographicDeleteModal />);

  export default InfographicDeleteModal;