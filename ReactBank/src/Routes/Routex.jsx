import React from "react";
import{Routes, Route, Navigate} from 'react-router-dom';

import { useSelector } from "react-redux";

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import UserPages from '../Pages/User/User';
import Error from '../Pages/Error/404'

function Routex(){
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return( 
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/user" element={isAuthenticated ? <UserPages/> : <Navigate to="/login" />}/>  
            <Route path="*" element={<Error />}/>
        </Routes>

    )
}
export default Routex