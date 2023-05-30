/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
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
                console.log('update User profile');
                setLoading(false);
            })
            .catch((err) => console.log(err.message));
    };
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
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
            setLoading(false);
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
        signOutUser,
        updateUser,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
