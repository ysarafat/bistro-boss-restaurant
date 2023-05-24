import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import slider1 from '../../../../assets/home/01.jpg';
import slider2 from '../../../../assets/home/02.jpg';
import slider3 from '../../../../assets/home/03.png';
import slider4 from '../../../../assets/home/04.jpg';
import slider5 from '../../../../assets/home/05.png';

function Banner() {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider2} alt="" />
                </div>
                <div>
                    <img src={slider3} alt="" />
                </div>
                <div>
                    <img src={slider4} alt="" />
                </div>
                <div>
                    <img src={slider5} alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
