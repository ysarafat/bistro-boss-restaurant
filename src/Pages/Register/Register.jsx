/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import authImg from '../../assets/others/authentication1.png';

function Register() {
    const { signUpUser, updateUser } = useContext(AuthContext);
    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email, name);
        signUpUser(email, password)
            .then((res) => {
                console.log(res.user);
                updateUser(name);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <section className="flex flex-row-reverse items-center justify-between py-32">
            <div className="w-1/2">
                <img src={authImg} alt="login page banner" />
            </div>
            <div className="w-1/2">
                <form onSubmit={handelRegister} className="px-20 space-y-4" action="">
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="">Name</label>
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="text"
                            placeholder="Enter Your Email"
                            required
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="">Email</label>
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="">Password</label>
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="password"
                            placeholder="Enter Your password"
                            required
                            name="password"
                        />
                    </div>

                    <input
                        className="h-12 bg-yellowOchre w-full rounded text-lg disabled:bg-slate-500 text-white hover:bg-cinder duration-300"
                        type="submit"
                        value="Sign In"
                    />
                </form>
            </div>
        </section>
    );
}

export default Register;
