import { Container, Row } from "react-bootstrap";
import CourseItem from "../components/Course/CourseItem";

const Courses = () => {
    return (
        <section className="page-section">
            <Container>
                <Row xs={1} md={2} xl={4} className="g-4">
                    <CourseItem />
                </Row>
            </Container>
        </section>
    )
}

export default Courses;