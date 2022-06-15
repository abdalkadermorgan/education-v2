import { useCallback, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, Modal, Table } from "react-bootstrap";
import CoursesAddModal from "../../../modals/CoursesAddModal";

const CourseDataTable = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCourse, setSelectedCourse] = useState([]);

  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

//   const [pageCount, setPageCount] = useState(1);
//   const [currentPage, setcurrentPage] = useState(1);

  const fetchCoursesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/courses`);

      if (!response.ok) {
        throw new Error("wrong!");
      }

      const res = await response.json();

      const loadedCourses = res.data.data;

	//   const pagination = res.data;
	//   setcurrentPage(pagination.current_page);
	//   console.log( "set11111", currentPage);

      setCourses(loadedCourses);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCoursesHandler();
  }, [fetchCoursesHandler]);

  async function addCourseHandler(course) {
    const response = await fetch("/api/admin/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("respon =>>", response);
    const res = await response.json();
    if (res.status) {
      fetchCoursesHandler();
    } else {
      alert(res.msg);
    }
    console.log("res => ", res);
  }

  // async function uploadImg() {
  // 	const response = await fetch('/api/file/upload', {
  // 		method: "POST",
  // 		body: JSON.stringify(),
  // 		headers: {
  // 			"Content-Type": "application/json",
  // 		},
  // 	});
  // 	const res = await response.json();
  // 	const imgId = res.data
  // 	console.log("res imag => ", res);
  // 	console.log("res imag Id => ", imgId);
  // }

  // console.log("upload =>", uploadImg);

  let content = <div></div>;

  if (courses.length > 0) {
    content = "";
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p className="">Loading...</p>;
  }

  function DeleteModal(course) {
    setSelectedCourse(course);
    handleShowDel();
  }
  async function onDeleteCourse() {
    console.log("coo", selectedCourse);
    const response = await fetch("/api/admin/courses/" + selectedCourse.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (res.status) {
      handleCloseDel();
      fetchCoursesHandler();
    } else {
      handleClose();
      alert(res.msg);
    }
  }

  const onEdit = (course) => {
    console.log("on edit coursee => ", course);
    handleShow(true);
    setSelectedCourse(course);
  };

  async function onEditcourse() {
    const response = await fetch("/api/admin/courses/" + selectedCourse.id, {
      method: "PATCH",
      body: JSON.stringify(selectedCourse),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("course2", selectedCourse);
    const res = await response.json();

    console.log("res", res);
    if (res.status) {
      handleClose();
      fetchCoursesHandler();
    } else {
      handleClose();
      alert(res.msg);
    }
    setSelectedCourse((s) => ({
      title: "",
      description: "",
      price: "",
      discount: "",
      category: "",
      image_id: "",
    }));
  }

  return (
    <div className="dashboard-content">
      <div className="d-flex mb-3 justify-content-end">
        <CoursesAddModal onAddCourse={addCourseHandler} />
      </div>
      {content}
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Catigory</th>
            <th>Price</th>
            <th>Discounts</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={`course-${index}`}>
              <td>{index + 1}</td>
              <td>
                <img src={course.image_url} width={50} height={50} alt="" />
              </td>
              <td>{course.title}</td>
              <td>{course.category}</td>
              <td>{course.price}</td>
              <td>{course.discount}</td>
              <td>
                <Button
                  variant="link primary edit"
                  onClick={() => onEdit(course)}
                >
                  Edit
                </Button>
                <Button
                  variant="link danger del"
                  onClick={() => DeleteModal(course)}
                >
                  Del
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      {/* Delete Modal */}
      <Modal show={showDel} onHide={handleCloseDel} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Course?
          {/* {course.id} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDel}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onDeleteCourse()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <Field
                  id="courseTitle"
                  name="cTitle"
                  placeholder="Title"
                  onChange={(e) =>
                    setSelectedCourse((s) => ({
                      ...s,
                      title: e.target.value,
                    }))
                  }
                  value={selectedCourse.title}
                />

                <Field
                  id="category"
                  name="category"
                  placeholder="Category"
                  onChange={(e) =>
                    setSelectedCourse((s) => ({
                      ...s,
                      category: e.target.value,
                    }))
                  }
                  value={selectedCourse.category}
                />

                <Field
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  onChange={(e) =>
                    setSelectedCourse((s) => ({
                      ...s,
                      price: parseInt(e.target.value),
                    }))
                  }
                  value={selectedCourse.price}
                />

                <Field
                  id="discount"
                  name="discount"
                  placeholder="Discount"
                  type="number"
                  onChange={(e) =>
                    setSelectedCourse((s) => ({
                      ...s,
                      discount: e.target.value,
                    }))
                  }
                  value={selectedCourse.discount}
                />

                <Field
                  as="textarea"
                  id="discrption"
                  name="discrption"
                  placeholder="Discription"
                  type="number"
                  onChange={(e) =>
                    setSelectedCourse((s) => ({
                      ...s,
                      description: e.target.value,
                    }))
                  }
                  value={selectedCourse.description}
                />

                <Field
                  id="img"
                  name="file"
                  placeholder="URL Image"
                  type="file"
                />
              </Form>
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onEditcourse()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseDataTable;
