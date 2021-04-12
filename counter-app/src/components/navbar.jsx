//import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    
    console.log('Navbar - Rendered');

    return (
            <nav className="navbar navbar-light bg-light">
                <a href="#do" className="navbar-brand">
                    NavBar
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </nav>
         );
}
 
export default NavBar;
