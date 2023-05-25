/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

function PopularMenu() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => {
                const popular = data.filter((d) => d.category === 'popular');
                setMenu(popular);
            });
    }, []);
    return (
        <section className="mt-20 max-w-screen-xl mx-auto px-4">
            <SectionTitle subTitle="check it out" title="from our menu" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                {menu?.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PopularMenu;
