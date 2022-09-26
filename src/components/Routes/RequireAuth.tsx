import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebaseconfig";
import {Outlet, Navigate} from "react-router-dom";

const RequireAuth = () => {
    const [user] = useAuthState(auth)
    return user ? <Outlet/> : <Navigate to={'/login'}/>
};

export default RequireAuth;