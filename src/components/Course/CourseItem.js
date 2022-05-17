import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CourseItem = () => {
    const { courses } = useSelector((state) => state);

    return  (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
        >
            {courses.map((course, index) => (
            <SwiperSlide className='swiper-slide' key={`course-homne-${index}`}>
                <Card>
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
                        <Button className="btn-card" variant="danger">Add To cart</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>
    ))
            }
        </Swiper>
)}

export default CourseItem;