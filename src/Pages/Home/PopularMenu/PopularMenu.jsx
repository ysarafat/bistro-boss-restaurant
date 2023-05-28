/* eslint-disable no-underscore-dangle */
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';

function PopularMenu() {
    const [menu] = useMenu();
    const popular = menu.filter((items) => items.category === 'popular');

    return (
        <section className="mt-20 max-w-screen-xl mx-auto px-4">
            <SectionTitle subTitle="check it out" title="from our menu" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                {popular?.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PopularMenu;
