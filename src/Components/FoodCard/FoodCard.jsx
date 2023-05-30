import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

function FoodCard({ items }) {
    const { user } = useContext(AuthContext);
    const { name, image, recipe, price, _id } = items;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = { itemId: _id, name, image, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add To Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Fast',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(items)} className="btn btn-primary">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
