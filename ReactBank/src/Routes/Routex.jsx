import React from "react";
import{Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login'
import User from '../Pages/User/User'

function Routex(){

    return( 
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/user" element={<User/>}/>        
        </Routes>

    )
}
export default Routex