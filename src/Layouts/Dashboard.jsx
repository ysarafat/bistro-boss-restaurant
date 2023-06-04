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
import useCart from '../hooks/useCart';

function Dashboard() {
    const [cart] = useCart();

    const admin = false;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 w-80 bg-[#D1A054] text-cinder text-lg">
                    {admin ? (
                        <>
                            <li>
                                <NavLink to="admin-home">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add-item">
                                    <FaUtensils /> Add Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-item">
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
