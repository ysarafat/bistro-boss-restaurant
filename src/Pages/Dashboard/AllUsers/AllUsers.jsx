/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function AllUsers() {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });
    const handleRoll = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div className="w-full">
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <div className="tooltip" data-tip="Admin">
                                            <button className="btn btn-square bg-red-500 text-white outline-none border-none">
                                                <MdOutlineAdminPanelSettings size={20} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="tooltip" data-tip="User">
                                            <button
                                                onClick={() => handleRoll(user._id)}
                                                className="btn btn-square bg-red-500 text-white outline-none border-none"
                                            >
                                                <FaUserAlt />
                                            </button>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-square bg-red-500 text-white outline-none border-none">
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

export default AllUsers;
