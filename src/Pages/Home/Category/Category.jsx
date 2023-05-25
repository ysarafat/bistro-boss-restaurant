/* eslint-disable import/no-unresolved */
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle';

function Category() {
    return (
        <section className="max-w-screen-xl mx-auto px-4 mt-20">
            <SectionTitle subTitle="From 11:00am to 10:00pm" title="order in online" />
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full rounded" src={slider1} alt="" />
                    <h2 className="text-2xl lg:text-4xl text-center -mt-10 font-cinzel text-white uppercase">
                        salads
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded" src={slider2} alt="" />
                    <h2 className="text-2xl lg:text-4xl text-center -mt-10 font-cinzel text-white uppercase">
                        pizza
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded" src={slider3} alt="" />
                    <h2 className="text-2xl lg:text-4xl text-center -mt-10 font-cinzel text-white uppercase">
                        soups
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded" src={slider4} alt="" />
                    <h2 className="text-2xl lg:text-4xl text-center -mt-10 font-cinzel text-white uppercase">
                        desserts
                    </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded" src={slider5} alt="" />
                    <h2 className="text-2xl lg:text-4xl text-center -mt-10 font-cinzel text-white uppercase">
                        salads
                    </h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Category;
