import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading}  = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="my-10 text-center">
            <span className="loading loading-spinner loading-lg"></span>;
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace />
};
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;