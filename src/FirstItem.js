import React from "react";
import sprite from './sprite.jpg';
import './items.css';


const FirstItem = () => {
    return (
        <div className="item-div">
            <img alt='bottle of sprite' className="item-img" src={sprite} />
        </div>

    )
}

export default FirstItem;