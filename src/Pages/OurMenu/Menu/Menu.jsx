import React from 'react';
import bgImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Cover from '../../Shared/Cover/Cover';

function Menu() {
    return (
        <section>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />
                <PopularMenu />
            </div>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />
                <PopularMenu />
            </div>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />
                <PopularMenu />
            </div>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />
                <PopularMenu />
            </div>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />
                <PopularMenu />
            </div>
        </section>
    );
}

export default Menu;
