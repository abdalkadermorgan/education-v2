import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { images } from "../../assets/images";

const CourseItem = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card >
                <div className="card-img">
                    <Card.Img variant="top" src={images.courseProgrammer} />
                </div>
                <Card.Body>
                    <div className="cart-catigory">UX/UI</div>
                    <Card.Title>Card Title</Card.Title>
                    <div className="prices">
                        <div className="discount">112.33 $</div>
                        <div className="price">100.33 $</div>
                    </div>
                    <Button className="btn-card" variant="danger">Add To cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CourseItem;