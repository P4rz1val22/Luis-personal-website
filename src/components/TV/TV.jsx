import './TV.css';
import React from "react";

const Tv = () => {
    return (
        <div>
            <div className='tv'>
                <div className='screen'>LUIS&nbsp; <br /> SARMIENTO</div>
                <div className='hozContainer'>
                    <div className='lines Left' />
                    <div className='screenButton' />
                    <div className='lines Right' />
                </div>

            </div>
        </div>
    );
}

export default Tv;