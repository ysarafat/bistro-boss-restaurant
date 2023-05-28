import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/OurMenu/Menu/Menu';

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
        ],
    },
]);

export default routers;
