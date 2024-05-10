import Bookings from "../Pages/Bookings/Bookings";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Root from "../Root/Root";

import { createBrowserRouter } from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path: '/signup',
                element: <Signup />
            }, 
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout /></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Bookings /></PrivateRoutes>
            }
        ]
    }
])

export default routes;