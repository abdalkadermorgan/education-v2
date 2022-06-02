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
import { useSelector } from 'react-redux';
const HomePage = () => {
    const { sliders, infographics } = useSelector((state) => state);

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
                        <img src={slide.urlImg}
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
                        {infographics.map((info, index) => (
                            <Row key={`infographic-homne-${index}`}>
                                <div className='col-md-3 col-sm-6'>
                                    <div className='counter-icon-number'>
                                        <div className='counter-icon'>
                                            <UilGraduationCap />
                                        </div>
                                        <div className='counter-number'>
                                            <span className='counter-count'>{info.students}</span>
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
                                            <span className='counter-count'>{info.available}</span>
                                            <p>Online Available Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <div className='counter-icon-number'>
                                        <div className='counter-icon'>
                                            <UilFavorite />
                                        </div>
                                        <div className='counter-number'>
                                            <span className='counter-count'>{info.products}</span>
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
                                            <span className='counter-count'>{info.teachers}</span>
                                            <p>Teachers Registered</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>

                        ))}
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