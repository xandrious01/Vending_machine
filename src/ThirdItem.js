import React from "react";
import crush from './crush.jpg';
import './items.css';
import './VendingMachine.css'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";


const ThirdItem = () => {
    return (
        <div className='item-div'>
            <img alt='crush drink'src={crush} className="item-img" />
        </div>

    )
}

export default ThirdItem;