import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import VendingNav from "./VendingNav";
import machine from './machine.png';
import FirstItem from "./FirstItem";
import SecondItem from "./SecondItem";
import ThirdItem from "./ThirdItem";
import FourthItem from "./FourthItem";
import './VendingMachine.css'
import ErrorMsg from "./ErrorMsg";

const VendingMachine = () => {
  
  return (
    <div className='overlay'>
      <div className="VendingMachine">
        <h1>Welcome to the Virtual Vending Machine!</h1>
        <h3>Click an item to view details</h3>
        <BrowserRouter>
          <img className='machine' src={machine}></img>
          <VendingNav className='navbar' />
          <Routes>
            <Route path="/" />
            <Route path="/FirstItem" element={<FirstItem />} />
            <Route path="/SecondItem" element={<SecondItem />} />
            <Route path="/ThirdItem" element={<ThirdItem />} />
            <Route path="/FourthItem" element={<FourthItem />} />
            
          </Routes>
        </BrowserRouter>
      </div>
      </div>
  )
};

export default VendingMachine;