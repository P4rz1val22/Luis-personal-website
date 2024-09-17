import { react, useState } from 'react';
import './Jukebox.css'
import Projects from '../../pages/Projects';

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

    const handleClick = (number) => {

        if (currentIndex == number) {
            console.log("Same clicked")
            const clickedStyle = {
                marginTop: '50vw',
            };
            if (!divClicked) {
                setTimeout(() => {
                    setStyle(sideStyle);
                }, 1000);
                const sideStyle = {
                    animation: 'rotation 2s infinite linear',
                    marginTop: '50vw',
                    marginLeft: '-60vw'
                }
                setStyle(clickedStyle);
            }
            else {
                setTimeout(() => {
                    setStyle(defaultStyle);
                }, 1000);
                setStyle(clickedStyle);

            }
            setClicked(!divClicked)
        }

        setCurrentIndex(number);
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
            <div className='project-selector'>
                <div className='album-selector'>
                    <div className='swipe backwards' onClick={() => handleArrowClick(-1)} />
                    <div className='carousel'>
                        <div onClick={() => handleClick(0)} className={`album ${(currentIndex == 0) ? 'center' : ''}`}></div>
                        <div onClick={() => handleClick(1)} className={`album ${(currentIndex == 1) ? 'center' : ''}`}></div>
                        <div onClick={() => handleClick(2)} className={`album ${(currentIndex == 2) ? 'center' : ''}`}></div>
                    </div>
                    <div className='swipe forwards' onClick={() => handleArrowClick(1)} />
                </div>
                <div className='disc-container'>
                    <div className='disc' onClick={() => handleClick()} style={divStyle} data-content={projects[currentIndex]}></div>
                </div>
            </div>
        </div>
    );
}

export default Jukebox;