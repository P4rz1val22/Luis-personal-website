import { React, useEffect, useState } from 'react';
import './Board.css';

// The board component that contains the description of 
// the work experiences I carried out. [Work section].
const Board = ({ number }) => {

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({ opacity: 0, marginTop: '3vw' });

    // Changes the style of the board for .3s when a new experience
    // is clicked.
    useEffect(() => {
        const boardTempStyle = {
            border: 'solid #7697a0 1vw',
            backgroundColor: '#99c2cd',
            opacity: 0,
            marginTop: '3vw',
        };

        setDivStyle(boardTempStyle);

        const timeout = setTimeout(() => {
            setDivStyle({});
        }, 300);

        return () => clearTimeout(timeout);
    }, [number]);

    // Text descriptions of the work experiences.
    const texts = [
        ["1ABC", "2ABC", "3ABC"],
        ["1EFG", "2EFG", "3EFG"],
        ["1IJK", "2IJK", "3IJK"],
        ["1LMN", "2LMN", "3LMN"],
    ];

    // Board component returned
    return (
        <div className='board' style={divStyle}>
            <div className='note first' >{texts[number][0]}</div>
            <div className='note second'>{texts[number][1]}</div>
            <div className='note third' >{texts[number][2]}</div>
        </div>
    );
}

export default Board;
