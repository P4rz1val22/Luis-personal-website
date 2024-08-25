import './Intercom.css';
import React from "react";
import { useState, useRef } from 'react';

const Intercom = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null); // Create a reference to the audio element

    const links = [
        'https://github.com/P4rz1val22',
        'https://github.com/P4rz1val22',
        'mailto:luis.sar.cor@gmail.com',
        'https://www.linkedin.com/in/luis-enrique-sarmiento-971360291/f'
    ];

    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;
        console.log(links[currentIndex])

        if (nextIndex > links.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            console.log("Underflow");
            nextIndex = links.length - 1;
        }

        if (audioRef.current) {
            audioRef.current.play();
        }

        if (amount != 0) {
            setRotation((prevRotation) => prevRotation + 90);
        }

        setCurrentIndex(nextIndex);
    };

    const [rotation, setRotation] = useState(0);

    return (
        <div className='intercom'>
            <div className='intercom-box'>
                <div className='intercom-speaker'>
                    <div style={{ height: '20vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '20vw' }} className='intercom-grate' />
                </div>
                <a onClick={() => handleClick(0)} href={links[currentIndex]} target="_blank" rel="noopener noreferrer" className='intercom-button' />
                <audio ref={audioRef} src="src/assets/Sounds/ClickSound.mov" />
            </div>
            <div className='wheel-wrapper'>
                <div className='intercom-wheel' onClick={() => handleClick(1)} style={{ transform: `rotate(${rotation}deg)` }} >
                    <img className='wheel-icon top-icon' src='src/assets/Images/GitHub-Logo.png' />
                    <img className='wheel-icon bottom-icon' src='src/assets/Images/LinkedIn-Logo.png' />
                    <img className='wheel-icon left-icon' src='src/assets/Images/Mail-Icon.png' />
                    <img className='wheel-icon right-icon' src='src/assets/Images/Form-Icon.png' />
                </div>
            </div>
        </div>
    );
}

export default Intercom;