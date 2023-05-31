import React, { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import useCart from '../../../hooks/useCart';

function Navbar() {
    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCart();
    const signOutHandler = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Out Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => console.log(err.message));
    };
    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'text-sunnyYellow' : 'text-white hover:text-yellowOchre duration-300'
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="/our-menu"
                className={({ isActive }) =>
                    isActive ? 'text-sunnyYellow' : 'text-white hover:text-yellowOchre duration-300'
                }
            >
                <li>Our Menu</li>
            </NavLink>
            <NavLink
                to="/our-shop/dessert"
                className={({ isActive }) =>
                    isActive ? 'text-sunnyYellow' : 'text-white hover:text-yellowOchre duration-300'
                }
            >
                <li>Our Shop</li>
            </NavLink>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive ? 'text-sunnyYellow' : 'text-white hover:text-yellowOchre duration-300'
                }
            >
                <li>Dashboard</li>
            </NavLink>
            <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                    isActive ? 'text-sunnyYellow' : 'text-white hover:text-yellowOchre duration-300'
                }
            >
                <li>Contact Us</li>
            </NavLink>
            {!user && (
                <>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-sunnyYellow'
                                : 'text-white hover:text-yellowOchre duration-300'
                        }
                    >
                        <li>Sign In</li>
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-sunnyYellow'
                                : 'text-white hover:text-yellowOchre duration-300'
                        }
                    >
                        <li>Sign Up</li>
                    </NavLink>
                </>
            )}
            {user && (
                <NavLink
                    onClick={signOutHandler}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-sunnyYellow'
                            : 'text-white hover:text-yellowOchre duration-300'
                    }
                >
                    <li>Sign Out</li>
                </NavLink>
            )}
        </>
    );
    return (
        <nav className="bg-cinder py-5 bg-opacity-70 fixed z-40 w-full">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-cinzel text-white">Bistro Boss</h1>
                <div className="flex items-center gap-10">
                    <ul className="flex items-center gap-4 text-base uppercase">{navLinks}</ul>
                    <button className="btn gap-2">
                        <HiShoppingCart color="#fff" size={25} />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
