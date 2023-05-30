/* eslint-disable no-underscore-dangle */
import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

function OrderTab({ items }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {items?.map((item) => (
                <FoodCard key={item._id} items={item} />
            ))}
        </div>
    );
}

export default OrderTab;
