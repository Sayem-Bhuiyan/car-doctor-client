import Home from "../Pages/HomePage/Home/Home";
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
            }
        ]
    }
])

export default routes;