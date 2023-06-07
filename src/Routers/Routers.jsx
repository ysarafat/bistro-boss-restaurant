import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layouts/Dashboard';
import Main from '../Layouts/Main';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Order from '../Pages/Order/Order/Order';
import Menu from '../Pages/OurMenu/Menu/Menu';
import Register from '../Pages/Register/Register';
import Secret from '../Pages/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './adminRoute';

const routers = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/our-menu',
                element: <Menu />,
            },
            {
                path: '/login',
                element: <Login />,
            },

            {
                path: '/our-shop/:category',
                element: <Order />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/secret',
                element: (
                    <PrivateRoute>
                        <Secret />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: 'myCart',
                element: <MyCart />,
            },
            {
                path: 'users',
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
            {
                path: 'add-items',
                element: (
                    <AdminRoute>
                        <AddItems />
                    </AdminRoute>
                ),
            },
            {
                path: 'manage-items',
                element: (
                    <AdminRoute>
                        <ManageItems />
                    </AdminRoute>
                ),
            },
        ],
    },
]);

export default routers;
