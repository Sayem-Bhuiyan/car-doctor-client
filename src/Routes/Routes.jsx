import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Root from "../Root/Root";

import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:  [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default routes;