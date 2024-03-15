import React from "react";
import water from './water.jpg';
import './items.css';


const SecondItem = () => {
    return (
        <div className='item-div'>
            <img alt='bottle of water' className="item-img" src={water} />
        </div>

    )
}

export default SecondItem;