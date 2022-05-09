import { Container } from "react-bootstrap";
import CourseItem from "../components/Course/CourseItem";

const Courses = () => {
    return (
        <section className="page-section">
            <Container>
                <CourseItem />
            </Container>
        </section>
    )
}

export default Courses;