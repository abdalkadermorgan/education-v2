import { Field, Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import SlideAddModal from "../../../modals/SlideAddModal";

const SlideDataTable = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedSlider, setSelectedSlider] = useState([]);


  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoursesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/slides`);

      if (!response.ok) {
        throw new Error("wrong!");
      }

      const res = await response.json();

      const loadedSliders = res.data.data;
console.log("loaded=>", loadedSliders);

      setSliders(loadedSliders);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCoursesHandler(1);
  }, [fetchCoursesHandler]);

  async function addSliderHandler(slides) {
    const response = await fetch("/api/admin/slides", {
      method: "POST",
      body: JSON.stringify(slides),
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

  let content = <div></div>;

  if (sliders.length > 0) {
    content = "";
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p className="">Loading...</p>;
  }

  return (
    <div className="dashboard-content">
      <div className="d-flex mb-3 justify-content-end">
        <SlideAddModal onAddSlide={addSliderHandler} />
      </div>
	  {content}
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sliders.map((slide, index) => (
            <tr key={`slide-${index}`}>
              <td>1</td>
              <td>
                <img src={slide.image_url} width={50} height={50} alt="" />
              </td>
              <td>{slide.title}</td>
              <td>
                <>
                  <Button
                    variant="link primary edit"
                    // onClick={() => onEdit(slide)}
                  >
                    Edit
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Slide</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <Formik
                          initialValues={{
                            slideTitle: "",
                            img: "",
                          }}
                          onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                          }}
                        >
                          <Form>
                            <Field
                              id="slideTitle"
                              name="slideTitle"
                              placeholder="Title"
                            //   onChange={(e) =>
                            //     setState((s) => ({
                            //       ...s,
                            //       title: e.target.value,
                            //     }))
                            //   }
                            //   value={state.title}
                            />

                            <Field
                              id="img"
                              name="img"
                              placeholder="URL Image"
                              type="text"
                            //   onChange={(e) =>
                            //     setState((s) => ({
                            //       ...s,
                            //       urlImg: e.target.value,
                            //     }))
                            //   }
                            //   value={state.urlImg}
                            />
                          </Form>
                        </Formik>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" 
					//   onClick={onEditslide}
					  >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
                <>
                  <Button variant="link danger del" onClick={handleShowDel}>
                    Del
                  </Button>

                  <Modal
                    show={showDel}
                    onHide={handleCloseDel}
                    animation={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Slide</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this slide?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseDel}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        // onClick={() => onDeleteSlide(slide.id)}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SlideDataTable;
