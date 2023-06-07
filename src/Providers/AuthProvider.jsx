/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //  update user
    const updateUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => console.log(err.message));
    };
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // sign Out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    // user observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // get and set token
            if (currentUser) {
                axios
                    .post('http://localhost:5000/jwt', {
                        email: currentUser.email,
                    })
                    .then((data) => localStorage.setItem('access-token', data.data.token));
                setLoading(false);
            } else {
                localStorage.removeItem('access-token');
            }
        });
        return () => {
            return unSubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUser,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
