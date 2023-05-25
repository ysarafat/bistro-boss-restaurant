/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';
import BistroBoss from '../bistroBoss/BistroBoss';

function Home() {
    return (
        <div>
            <Banner />
            <Category />
            <BistroBoss />
            <PopularMenu />
            <CallUs />
            <Featured />
            <Testimonials />
        </div>
    );
}

export default Home;
