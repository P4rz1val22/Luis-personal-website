import './TV.css';
import React, { useState } from 'react';


const Tv = () => {

    const gradients = [
        'repeating-linear-gradient(-45deg, #40456B, #40456B 10px, #393d5d 10px, #393d5d 20px)',
        'repeating-linear-gradient(-45deg, #FF5733, #FF5733 10px, #C70039 10px, #C70039 20px)',
        'repeating-linear-gradient(-45deg, #28B463, #28B463 10px, #1D8348 10px, #1D8348 20px)',
        'repeating-linear-gradient(-45deg, #1F618D, #1F618D 10px, #154360 10px, #154360 20px)',
        'repeating-linear-gradient(-45deg, #8E44AD, #8E44AD 10px, #5B2C6F 10px, #5B2C6F 20px)',
    ];

    const [bgIndex, setBgIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);
    const [canPlay, setCanPlay] = useState(true);

    const changeGradient = () => {

        setIsHoverEnabled(false);
        setTimeout(() => {
            setIsHoverEnabled(true);
        }, 100);

        if (canPlay) {
            const audio = new Audio('src/assets/Sounds/StaticSound.mov');
            const audio2 = new Audio('src/assets/Sounds/ClickSound.mov');
            audio.volume = 0.6; // Set the volume to 50%
            audio2.volume = 0.6; // Set the volume to 50%
            audio.play();
            audio2.play();

            setCanPlay(false); // Prevent further playback
            setTimeout(() => {
                setCanPlay(true); // Allow playback after 1 second (1000ms)
            }, 500);
        }
        setIsTransitioning(true);
        setTimeout(() => {
            const nextIndex = (bgIndex + 1) % gradients.length;
            setBgIndex(nextIndex);
            setIsTransitioning(false);
        }, 500); // Half-second transition
    };

    return (
        <div>
            <div className='tv'>
                <div className={`screen ${isTransitioning ? 'static' : ''}`}
                    style={{ background: gradients[bgIndex] }}>LUIS&nbsp; <br /> SARMIENTO</div>
                <div className='hozContainer'>
                    <div className='lines' />
                    <div onClick={changeGradient} className={`screenButton ${!isHoverEnabled ? 'screenNoHover' : ''}`} />
                    <div className='lines Reverse' />
                </div>
            </div>
        </div>
    );
}

export default Tv;