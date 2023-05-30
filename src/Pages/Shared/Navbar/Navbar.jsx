import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

function Navbar() {
    const { user, signOutUser } = useContext(AuthContext);
    const signOutHandler = () => {
        signOutUser()
            .then(() => console.log('sing out secssfull'))
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
                to="/our-shop"
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
                <div>
                    <ul className="flex items-center gap-4 text-base uppercase">{navLinks}</ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
