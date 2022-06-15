import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import '../assets/sass/components/_swiper.scss'
import { Pagination } from 'swiper';
import CourseItem from '../components/Course/CourseItem';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilGraduationCap } from '@iconscout/react-unicons';
import { UilBook } from '@iconscout/react-unicons';
import { UilFavorite } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';
import { useCallback, useEffect, useState } from 'react';
const HomePage = () => {
    const [sliders, setSliders] = useState([]);
    const [totalCourse, setTotalCourse] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchCoursesHandler = useCallback(async () => {
        try {
            const response = await fetch(`/api/admin/courses`);
            if (!response.ok) {
                throw new Error("wrong!");
            }
            const res = await response.json();
            const totalCourses = res.data.total;
            setTotalCourse(totalCourses);
            console.log("total", totalCourses);
        } catch (error) {
            setError(error.message);
        }
    }, []);

    const fetchSlidersHandler = useCallback(async () => {
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
        fetchSlidersHandler();
        fetchCoursesHandler();
    }, [fetchSlidersHandler, fetchCoursesHandler]);

    if (isLoading) {
		return <p className="">Loading...</p>;
	}


	if (error) {
		return <p>{error}</p>;
	}

    return (
        <div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            >
                {sliders.map((slide, index) => (
                    <SwiperSlide className='swiper-slide' key={`slider-home-${index}`}>
                        <img src={slide.image_url}
                            alt='' />
                    </SwiperSlide>

                ))}
            </Swiper>

            <section className='page-section'>
                <Container>
                    <div className='section-title'>
                        <h2>Courses</h2>
                        <Link to="/courses">
                            View All Courses
                            <UilArrowRight />
                        </Link>
                    </div>
                    <Row xs={1} md={2} xl={4} className="g-4">
                        <CourseItem />
                    </Row>
                </Container>
            </section>

            <section className='page-section'>
                <Container>
                    <div className='search-counter-up'>
                        {/* {infographics.map((info, index) => ( */}
                        <Row>
                            <div className='col-md-3 col-sm-6'>
                                <div className='counter-icon-number'>
                                    <div className='counter-icon'>
                                        <UilGraduationCap />
                                    </div>
                                    <div className='counter-number'>
                                        <span className='counter-count'>12</span>
                                        <p>Students Enrolled</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='counter-icon-number'>
                                    <div className='counter-icon'>
                                        <UilBook />
                                    </div>
                                    <div className='counter-number'>
                                        <span className='counter-count'>{totalCourse}</span>
                                        <p>total Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='counter-icon-number'>
                                    <div className='counter-icon'>
                                        <UilFavorite />
                                    </div>
                                    <div className='counter-number'>
                                        <span className='counter-count'>100</span>
                                        <p>Premium Quality Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='counter-icon-number'>
                                    <div className='counter-icon'>
                                        <UilUsersAlt />
                                    </div>
                                    <div className='counter-number'>
                                        <span className='counter-count'>200</span>
                                        <p>Teachers Registered</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        {/* ))} */}
                    </div>
                </Container>
            </section>

            <section className='page-section'>
                <Container>
                    <div className='section-title'>
                        <h2>Subscribe Newsletter</h2>
                    </div>

                    <div className='subs-form'>
                        <input className='sub' type='email' placeholder='Email Address' />
                        <div className='nws-button'>
                            <button type='submit' className='gradient-bg'>Subscirbe Now</button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default HomePage;