/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Dashbord() {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li>
                        <p>Sidebar Item 1</p>
                    </li>
                    <li>
                        <p>Sidebar Item 2</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashbord;
