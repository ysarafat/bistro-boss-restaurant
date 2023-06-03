/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import authImg from '../../assets/others/authentication1.png';
import GoogleLogin from '../Shared/SocialLogin/GoogleLogin';
import './login.css';

function Login() {
    const captchaRef = useRef(null);
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        const captchaValue = captchaRef.current.value;
        if (validateCaptcha(captchaValue)) {
            signInUser(email, password)
                .then((res) => {
                    console.log(res.user);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sign In Successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate(from, { replace: true });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            console.log('not match');
        }
    };

    return (
        <section className="flex items-center justify-between py-32">
            <div className="w-1/2">
                <img src={authImg} alt="login page banner" />
            </div>
            <div className="w-1/2">
                <form onSubmit={handelLogin} className="px-20 space-y-4" action="">
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
                    <LoadCanvasTemplate />
                    <div className="flex flex-col w-full gap-1">
                        <input
                            className="h-12 border-2 rounded px-3 border-smokeyGrey focus:border-yellowOchre outline-none"
                            type="text"
                            ref={captchaRef}
                            placeholder="Enter Captcha code"
                            required
                        />
                    </div>
                    <input
                        className="h-12 bg-yellowOchre w-full rounded text-lg disabled:bg-slate-500 text-white hover:bg-cinder duration-300"
                        type="submit"
                        value="Sign In"
                    />
                </form>
                <div className="divider px-20"> or</div>
                <GoogleLogin />
            </div>
        </section>
    );
}

export default Login;
