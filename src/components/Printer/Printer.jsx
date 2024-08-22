import './Printer.css';
import React from "react";
import { useState } from 'react';

const Printer = () => {

    const texts = [
        'First text',
        'Second text',
        'Third text'
    ];

    // State to keep track of the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;
        console.log(currentIndex)

        if (nextIndex > texts.length - 1) {
            nextIndex = 0;
            console.log("Overflow");
        }

        if (nextIndex < 0) {
            console.log("Underflow");
            nextIndex = texts.length - 1;
        }

        setCurrentIndex(nextIndex);
    };

    return (
        <div className='container'>
            <div className='printerButtons'>
                <div className='arrows'>
                    <div className='arrow LeftShadow' />
                    <div onClick={() => handleClick(-1)} className='arrow Left' />
                </div>
                <div className='arrows'>
                    <div id="clickableDiv" className='arrow RightShadow Opposite' />
                    <div onClick={() => handleClick(1)} className='arrow Opposite' />

                </div>
                <div className='printButton' />
            </div>
            <div className='printerScreen' >
                <div className='typedText'>
                    {texts[currentIndex]}
                </div>
            </div>
            <div className='printerOutput' />
            <div className='printerPaper' />
        </div>
    );
}

export default Printer;