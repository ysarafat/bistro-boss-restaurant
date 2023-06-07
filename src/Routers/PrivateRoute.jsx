import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1>Loading... Please Wait</h1>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
