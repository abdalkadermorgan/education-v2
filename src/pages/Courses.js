import { Container } from "react-bootstrap";
import CourseItem from "../components/Course/CourseItem";

const Courses = () => {
    return (
        <section className="page-section">
            <Container>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <CourseItem />
                </div>
            </Container>
        </section>
    )
}

export default Courses;