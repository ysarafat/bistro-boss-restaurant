/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../../Components/SectionTitle';
import qutes from '../../../assets/Group.png';

function Testimonials() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="mb-20 max-w-screen-xl mx-auto px-4">
            <SectionTitle subTitle="What Our Client Say" title="Testimonials" />

            <Swiper navigation modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-20">
                            <Rating style={{ maxWidth: 280 }} value={review.rating} readOnly />
                            <img className="mt-12" src={qutes} alt="" />
                            <p className="text-xl text-cinder text-center mt-10">
                                {review.details}
                            </p>
                            <h3 className="text-2xl text-yellowOchre mt-2">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;
