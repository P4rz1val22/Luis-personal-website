// The Work page.
import Clock from "../components/Clock/Clock.jsx";
import Board from "../components/Board/Board.jsx";
import { React, useState, useEffect } from "react";

const Work = () => {

    const isMobile = window.innerWidth <= 768;

    const [cardNo, setCardNo] = useState(0);

    const handleClick = (number) => {
        setCardNo(number);
        console.log(cardNo);
    };

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({
        opacity: 0,
        marginTop: '3vw'
    });

    useEffect(() => {
        const regDivStyle = {}
        setDivStyle({ regDivStyle });
    }, []);

    const clickedStyle = {
        height: '8vw',
        backgroundColor: '#fd8916',
        color: 'white'
    };

    const defaultStyle = {};

    return (
        <div>
            <div className="vert-container">
                <div style={divStyle} className='punch-clock-container' >
                    <div className='slot-col'>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 0 ? clickedStyle : defaultStyle} onClick={() => handleClick(0)}>
                                Work 1
                            </div>
                        </div>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot' />
                    </div>
                    {!isMobile && <Clock />}
                    <div className='slot-col'>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 1 ? clickedStyle : defaultStyle} onClick={() => handleClick(1)}>
                                Work 2
                            </div>
                        </div>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 2 ? clickedStyle : defaultStyle} onClick={() => handleClick(2)}>
                                Work 3
                            </div>
                        </div>
                        <div className='slot' />
                    </div>
                </div>
                <Board number={cardNo} />
            </div>
        </div>
    );
}

export default Work;