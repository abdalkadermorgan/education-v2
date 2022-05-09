import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import '../assets/sass/components/_swiper.scss'
import { Pagination } from 'swiper';
import CourseItem from '../components/Course/CourseItem';
import { Container } from 'react-bootstrap';

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
        </div>
      );
};

export default HomePage;