import React from "react";
import './ScareCrowBox.css';

const ScareCrowBox = ({img}) => {
    return (
        <div className="ScareCrowBox">
            <img src={img} alt="" />

            <div className="text">
                <h1>I have some bad news for you</h1>

                <p>The page you are looking for might 
                    be removed or is temporarily 
                    unavailable
                </p>
            </div>
        </div>
    )
}

export default ScareCrowBox;