import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <div>
        <h1>Loading</h1>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;