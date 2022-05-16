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
const HomePage = () => {

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
                <SwiperSlide className='swiper-slide'>
                    <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                </SwiperSlide>
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
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide className='swiper-slide'>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

            <section className='page-section'>
                <Container>
                    <div className='search-counter-up'>
                        <Row>
                            <div className='col-md-3 col-sm-6'>
                                <div className='counter-icon-number'>
                                    <div className='counter-icon'>
                                        <UilGraduationCap />
                                    </div>
                                    <div className='counter-number'>
                                        <span className='counter-count'>5M+</span>
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
                                        <span className='counter-count'>122.500+</span>
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
                                        <span className='counter-count'>15.000+</span>
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
                                        <span className='counter-count'>7.500+</span>
                                        <p>Teachers Registered</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
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