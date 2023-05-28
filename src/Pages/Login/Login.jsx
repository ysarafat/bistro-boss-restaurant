/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import authImg from '../../assets/others/authentication1.png';

function Login() {
    return (
        <section className="flex items-center justify-between py-32">
            <div className="w-1/2">
                <img src={authImg} alt="login page banner" />
            </div>
            <div className="w-1/2">
                <form className="px-20 space-y-4" action="">
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="">Email</label>
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="">Password</label>
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="password"
                            placeholder="Enter Your password"
                            required
                        />
                    </div>
                    <input
                        className="h-12 bg-yellowOchre w-full rounded text-lg text-white hover:bg-cinder duration-300"
                        type="submit"
                        value="Sign In"
                    />
                </form>
            </div>
        </section>
    );
}

export default Login;
