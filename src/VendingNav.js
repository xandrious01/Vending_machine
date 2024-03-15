import React, { useState } from "react";
import { useLocation, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './VendingNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    Button, 
    button
} from 'reactstrap';


const VendingNav = () => {

    const location = useLocation();
    
    return (
        <div className='nav-div'>
            <Nav justified pills>
                <NavItem>
                    <Link to="./FirstItem"><button className='btn btn-outline-light btn-lg'>Sprite</button></Link>
                </NavItem>
                <NavItem>
                    <Link to="./SecondItem"><button className='btn btn-outline-light btn-lg'>Water</button></Link>
                </NavItem>
                <NavItem>
                    <Link to="./ThirdItem"><button className='btn btn-outline-light btn-lg'>Crush</button></Link>
                </NavItem>
                <NavItem>
                    <Link to="./FourthItem"><button className='btn btn-outline-light btn-lg'>Gatorade</button></Link>
                </NavItem>
            </Nav>

            <div className="cancel-btn">
               
            </div>

        </div>
    );
}

export default VendingNav;