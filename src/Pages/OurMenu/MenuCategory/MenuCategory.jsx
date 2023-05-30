/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../../Shared/MenuItem/MenuItem';

function MenuCategory({ items, title }) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                {items?.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>

            <Link to={`/our-shop/${title}`}>
                <button className="text-xl px-5 py-2 rounded-lg border-b-4  mt-6 text-cinder text-center    ">
                    Order Now
                </button>
            </Link>
        </div>
    );
}

export default MenuCategory;
