import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

function MyCart() {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/carts/${_id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount > 0) {
                            refetch();
                        }
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    }
                });
            });
    };
    return (
        <div className="w-full lg:p-20">
            <div className="flex justify-between mb-10 items-center">
                <p className="text-3xl"> Total Order : {cart.length}</p>
                <p className="text-3xl"> Total Price : {total.toFixed(2)}</p>
                <button className="btn bg-[#D1A054] outline-none border-none">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item?.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item?.name}</td>
                                <td className="">${item?.price.toFixed(2)}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn bg-red-500 border-none "
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyCart;
