import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import RequireAuth from "./RequireAuth";
import NotFound from "../../pages/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route element={<RequireAuth/>}>
                    <Route path={'profile'} element={<Profile/>}/>
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;