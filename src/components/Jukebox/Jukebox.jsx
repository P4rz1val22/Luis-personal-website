import { react, useState } from 'react';
import './Jukebox.css'
import Projects from '../../pages/Projects';

const Jukebox = () => {

    const isMobile = window.innerWidth <= 768;

    const [divStyle, setStyle] = useState({});
    const [divClicked, setClicked] = useState(false);
    const defaultStyle = {
    };

    const projects = [
        'LiveNEU',
        'Open-House',
        'Personal Website'
    ];

    const projectDescs = ['In August 2024, I designed and developed a personal website using HTML, CSS, JavaScript, React, and Vite. The site serves as a hub for showcasing my personal projects and experiences. I also implemented interactive components with React and JavaScript, enhancing user engagement and creating a more dynamic browsing experience.',
        'I trained and deployed a machine learning model on AWS SageMaker to predict the average market price of over 14,000 rental properties in Sydney. I utilized Pandas for data cleaning and built a Python algorithm to compare actual market values with predicted prices. The model was also used to evaluate rental agencies based on their pricing tendencies, helping users identify which agencies are better suited for renters or landlords.',
        'In April 2024, I developed LiveNEU, a website aimed at improving Northeastern University’s housing information platform. Built with HTML, CSS, JavaScript, Supabase, React, and Vite, this platform features detailed housing application information. I also initiated the development of a database to track dorm information, offering students a more streamlined and informative resource for housing.'
    ];

    const handleClick = (number) => {

        if (currentIndex == number) {
            console.log("Same clicked")
            const clickedStyle = {
                marginTop: '40vw',
            };
            if (!divClicked) {
                setTimeout(() => {
                    setStyle(sideStyle);
                }, 1000);
                const sideStyle = {
                    animation: 'rotation 2s infinite linear',
                    marginTop: '40vw',
                    marginLeft: '-60vw',
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
                    <div className='disc' onClick={() => handleClick(currentIndex)} style={divStyle} data-content={!isMobile ? projects[currentIndex] : ''}></div>
                </div>
            </div>
            <div className='hoz-container black'>
                <div className='disc-holder' />
                <div className={`project-text ${!divClicked ? 'transparent' : ''}`}>
                    <h2>{projects[currentIndex]}</h2>
                    {projectDescs[currentIndex]}
                </div>
            </div>
            <div className='project-selector'></div>
        </div >
    );
}

export default Jukebox;