import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

function AdminRoute({ children }) {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <h1>Loading...</h1>;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
}

export default AdminRoute;
