import { react, useState } from 'react';
import './Jukebox.css'

const Jukebox = () => {

    const [divStyle, setStyle] = useState({});
    const [divClicked, setClicked] = useState(false);

    const defaultStyle = {
    };

    const projects = [
        'Resume',
        'L. of Rec #1',
        'L. of Rec #2'
    ];

    const handleClick = () => {
        const clickedStyle = {
            transform: 'scaleY(0.2)',
        };
        if (!divClicked) {
            setStyle(clickedStyle);
        }
        else {
            setStyle(defaultStyle);
        }
        setClicked(!divClicked)
    }

    // Current index constant
    const [currentIndex, setCurrentIndex] = useState(1);

    // Checks if the mouse is hovering over the button
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

    // Handles the clicking of the selection (triangular) and
    // printing (circular) buttons
    const handleArrowClick = (amount) => {
        let nextIndex = currentIndex + amount;
        console.log(currentIndex)

        if (nextIndex > projects.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = projects.length - 1;
        }

        setCurrentIndex(nextIndex);
    };



    return (
        <div>
            <div className='album-selector'>
                <div className='swipe backwards' onClick={() => handleArrowClick(-1)} />
                <div className='carousel'>
                    <div id='1' className={`album ${(currentIndex == 0) ? 'center' : ''}`}></div>
                    <div id='2' className={`album ${(currentIndex == 1) ? 'center' : ''}`}>{currentIndex}</div>
                    <div id='3' className={`album ${(currentIndex == 2) ? 'center' : ''}`}></div>
                </div>
                <div className='swipe forwards' onClick={() => handleArrowClick(1)} />
            </div>
            <div className='disc-container'>
                <div className='disc' onClick={() => handleClick()} style={divStyle} />
            </div>
        </div>
    );
}

export default Jukebox;