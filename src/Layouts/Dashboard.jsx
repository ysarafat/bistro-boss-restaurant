/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
    FaBook,
    FaCalendarAlt,
    FaHome,
    FaShoppingBag,
    FaShoppingCart,
    FaUser,
    FaUtensils,
    FaWallet,
} from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';

function Dashboard() {
    const [cart] = useCart();

    // const isAdmin = false;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:p-20 px-4">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 w-80 bg-[#D1A054] text-cinder text-lg">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="admin-home">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="add-items">
                                    <FaUtensils /> Add Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-items">
                                    <FaWallet /> Mange Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-booking">
                                    <FaBook />
                                    Manage Booking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="users">
                                    <FaUser />
                                    All User
                                </NavLink>
                            </li>
                            <div className="divider" />
                            <li>
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/our-menu">
                                    {' '}
                                    <GiMeal /> Our Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/our-shop/dessert">
                                    <FaShoppingBag />
                                    Order Food
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="user-home">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="myCart">
                                    <FaShoppingCart /> My cart{' '}
                                    <p className="badge badge-sm ">+{cart.length}</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="payment-history">
                                    <FaWallet /> Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="reservations">
                                    <FaCalendarAlt /> Reservations
                                </NavLink>
                            </li>
                            <div className="divider" />
                            <li>
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/our-menu">
                                    {' '}
                                    <GiMeal /> Our Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/our-shop/dessert">
                                    <FaShoppingBag />
                                    Order Food
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
