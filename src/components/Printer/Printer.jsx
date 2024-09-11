import './Printer.css';
import React from "react";
import { useState, useRef } from 'react';

// The Printer component that enables users to access important documents. i.e. my Resume, Letters of recommendation. [Home section]
const Printer = () => {

    // Reference to button click audio.
    const audioRef = useRef(null);

    // Available texts and links. Adding a new one is easy. 
    // Add the text content to be displayed on the screen to the
    // "texts" array & add the link to the "links" array in the 
    // same position.
    const texts = [
        'Resume',
        'L. of Rec #1',
        'L. of Rec #2'
    ];

    const links = [
        'src/assets/PDFs/Resume.pdf',
        'src/assets/PDFs/LOR1.pdf',
        'src/assets/PDFs/LOR2.pdf',
    ];

    // Current index constant
    const [currentIndex, setCurrentIndex] = useState(0);

    // Checks if the mouse is hovering over the button
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

    // Handles the clicking of the selection (triangular) and
    // printing (circular) buttons
    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;
        console.log(currentIndex)

        if (nextIndex > texts.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = texts.length - 1;
        }

        if (audioRef.current) {
            audioRef.current.play();
        }

        setCurrentIndex(nextIndex);
        setIsHoverEnabled(false);

        // For .1s, the button is clicked further down by setting
        // isHoverEnabled to true. This allows for a better clicking
        // experience.
        setTimeout(() => {
            setIsHoverEnabled(true);
        }, 100);
    };

    // Boolean for checking if the audio can play, so that audio 
    // playing cannot be abused (regardless of how amusing it may be).
    const [canPlay, setCanPlay] = useState(true);

    // Handles the hovering over the sheet of paper coming out of the printer.
    const handleMouseEnter = () => {
        if (canPlay) {
            const audio = new Audio('src/assets/Sounds/Printer.mov');
            audio.volume = 0.6;
            audio.play();

            // Prevent further playback
            setCanPlay(false);
            setTimeout(() => {
                setCanPlay(true);
            }, 1000);
        }
    };

    const handleMouseLeave = () => {

    };

    // Returns the Printer component.
    return (
        <div className='printer-container'>
            <div className='printer-buttons'>
                <div className='arrows'>
                    <div className='arrow left-shadow' />
                    <div onClick={() => handleClick(-1)} className={`arrow ${!isHoverEnabled ? 'no-hover' : ''}`} />
                </div>
                <div className='arrows'>
                    <div className='arrow right-shadow opposite ' />
                    <div onClick={() => handleClick(1)} className={`arrow opposite ${!isHoverEnabled ? 'no-hover' : ''}`} />

                </div>
                <a onClick={() => handleClick(0)} href={links[currentIndex]} target="_blank" rel="noopener noreferrer" className='print-button' />
                <audio ref={audioRef} src="src/assets/Sounds/ClickSound.mov" />
            </div>
            <div className='printerScreen' >
                <div className='typed-text'>
                    {texts[currentIndex]}
                </div>
            </div>
            <div className='printerOutput' />
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='printer-paper' target="_blank" rel="noopener noreferrer" href={links[currentIndex]} />

        </div>
    );
}

export default Printer;