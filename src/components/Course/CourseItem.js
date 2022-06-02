import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseItemForm from "./CourseItemForm";

const CourseItem = () => {
    const { courses } = useSelector((state) => state);


    return courses.map((course, index) => (  
            <Card key={`course-homne-${index}`}>
                <Link to={`/course/${course.id}`}>
                        <div className="card-img">
                            <Card.Img variant="top" src={course.urlImg} />
                        </div>
                        <Card.Body>
                            <div className="cart-catigory">{course.catigory}</div>
                            <Card.Title>{course.title}</Card.Title>
                            <div className="prices">
                                <div className="discount">{course.discount} $</div>
                                <div className="price">{course.price} $</div>
                            </div>
                            <CourseItemForm course={course}  />
                        </Card.Body>
                </Link>
            </Card>

    )
)}

export default CourseItem;