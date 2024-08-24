import './TV.css';
import React from "react";

const Tv = () => {
    return (
        <div>
            <div className='tv'>
                <div className='screen'>LUIS&nbsp; <br /> SARMIENTO</div>
                <div className='hozContainer'>
                    <div className='lines' />
                    <div className='screenButton' />
                    <div className='lines Reverse' />
                </div>

            </div>
        </div>
    );
}

export default Tv;