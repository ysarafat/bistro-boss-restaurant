import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Order from '../Pages/Order/Order/Order';
import Menu from '../Pages/OurMenu/Menu/Menu';
import Register from '../Pages/Register/Register';
import Secret from '../Pages/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute';

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
                path: '/our-shop/',
                element: <Order />,
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
]);

export default routers;
