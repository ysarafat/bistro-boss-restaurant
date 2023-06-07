import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

function ManageItems() {
    const [menu, loading, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (item) => {
        console.log(item._id);
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
                axiosSecure.delete(`/menu/${item._id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire('Deleted!', 'Your menu item has been deleted.', 'success');
                    }
                });
            }
        });
    };
    return (
        <div className="w-full">
            <SectionTitle subTitle="Hurry up" title="manage all items" />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <div className="tooltip" data-tip="Edit Item">
                                        <button className="btn btn-square bg-yellowOchre text-white outline-none border-none">
                                            <FaEdit />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div className="tooltip" data-tip="Delete Item">
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-square bg-red-500 text-white outline-none border-none"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageItems;
