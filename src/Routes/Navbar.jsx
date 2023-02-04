
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{display:"flex", color:"pink",justifyContent:"right",backgroundColor:"orange",height:"42px", gap:"30px"}}>
            <Link to="/login" >Login</Link>
            <Link to="/data" >User Data</Link>
            <Link to="/report" >User Report</Link>
        </div>
    );
}

export default Navbar;