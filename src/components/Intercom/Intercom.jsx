import './Intercom.css';
import React from "react";
import { useState, useRef } from 'react';

const Intercom = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null); // Create a reference to the audio element

    const links = [
        'https://www.linkedin.com/in/luis-enrique-sarmiento-971360291/f',
        'mailto:luis.sar.cor@gmail.com',
        'https://github.com/P4rz1val22'
    ];

    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;
        console.log(currentIndex)

        if (nextIndex > links.length - 1) {
            nextIndex = 0;
            console.log("Overflow");
        }

        if (nextIndex < 0) {
            console.log("Underflow");
            nextIndex = links.length - 1;
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
                <audio ref={audioRef} src="src/assets/ClickSound.mov" />
            </div>
            <div className='intercom-wheel' />
        </div>
    );
}

export default Intercom;