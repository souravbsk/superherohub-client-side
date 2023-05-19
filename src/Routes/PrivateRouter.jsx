import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Loader from '../Shared/Loader/Loader';
const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <div>
        <Loader></Loader>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;