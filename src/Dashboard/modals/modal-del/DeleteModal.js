// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// const DeleteModal = () => {
// 	const [showDel, setShowDel] = useState(false);
// 	const handleCloseDel = () => setShowDel(false);
// 	const handleShowDel = () => setShowDel(true);

//     return (
//         <Modal show={showDel} onHide={handleCloseDel} animation={false}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Delete Course</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 Are you sure to delete this Course?
//                 {course.id}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleCloseDel}>
//                     Close
//                 </Button>
//                 <Button variant="primary" onClick={() => onDeleteCourse(course.id)}>
//                     Delete
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     )
// }

// export default DeleteModal;