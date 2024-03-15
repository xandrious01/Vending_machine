import React from "react";
import gatorade from './gatorade.jpg';
import './items.css';

const FourthItem = () => {
    return (
        <div className="item-div">
            <img alt='bottle of gatorade' className="item-img" src={gatorade} />
        </div>

    )
}

export default FourthItem;