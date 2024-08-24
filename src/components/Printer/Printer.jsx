import './Printer.css';
import React from "react";
import { useState, useRef } from 'react';

const Printer = () => {

    const audioRef = useRef(null); // Create a reference to the audio element

    const texts = [
        'Resume',
        'L. of Rec #1',
        'L. of Rec #2'
    ];

    const links = [
        'src/assets/Resume.pdf',
        'src/assets/LOR1.pdf',
        'src/assets/LOR2.pdf'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // State to control whether hover is enabled
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

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

        if (audioRef.current) {
            audioRef.current.play();
        }

        setCurrentIndex(nextIndex);
        setIsHoverEnabled(false);
        setTimeout(() => {
            setIsHoverEnabled(true);
        }, 100);
    };

    const [canPlay, setCanPlay] = useState(true);

    const handleMouseEnter = () => {

        if (canPlay) {
            const audio = new Audio('src/assets/Printer.mov');
            audio.volume = 0.6; // Set the volume to 50%
            audio.play();

            setCanPlay(false); // Prevent further playback
            setTimeout(() => {
                setCanPlay(true); // Allow playback after 1 second (1000ms)
            }, 1000);
        }
    };

    const handleMouseLeave = () => {

    };

    return (
        <div className='container'>
            <div className='printerButtons'>
                <div className='arrows'>
                    <div className='arrow LeftShadow' />
                    <div onClick={() => handleClick(-1)} className={`arrow Left ${!isHoverEnabled ? 'noHover' : ''}`} />
                </div>
                <div className='arrows'>
                    <div id="clickableDiv" className='arrow RightShadow Opposite ' />
                    <div onClick={() => handleClick(1)} className={`arrow Opposite ${!isHoverEnabled ? 'noHover' : ''}`} />

                </div>
                <a onClick={() => handleClick(0)} href={links[currentIndex]} target="_blank" rel="noopener noreferrer" className='printButton' />
                <audio ref={audioRef} src="src/assets/ClickSound.mov" />
            </div>
            <div className='printerScreen' >
                <div className='typedText'>
                    {texts[currentIndex]}
                </div>
            </div>
            <div className='printerOutput' />
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='printerPaper' target="_blank" rel="noopener noreferrer" href={links[currentIndex]} />

        </div>
    );
}

export default Printer;