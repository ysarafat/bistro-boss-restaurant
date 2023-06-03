import React, { useContext } from 'react';

import { CgGoogle } from 'react-icons/cg';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

function GoogleLogin() {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                const currentUser = res.user;
                const userInfo = {
                    userName: currentUser?.displayName,
                    userEmail: currentUser?.email,
                    role: 'user',
                };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sign Up Successful',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                        navigate(from, { replace: true });
                    });
            })

            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div className="text-center">
            <button
                onClick={handleGoogleLogin}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
                <CgGoogle size={30} />
            </button>
        </div>
    );
}

export default GoogleLogin;
