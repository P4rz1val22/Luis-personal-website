import './Navbar.css';
import React from "react";
import PropTypes from 'prop-types';

function NavBarButton({ name }) {
    return (
        <div className='navBarButton'>
            {name}
        </div>
    );
}

NavBarButton.propTypes = {
    name: PropTypes.string.isRequired,
};

export default function Navbar() {
    return (
        <div className='navBar'>
            <NavBarButton name={'HOME'} />
            <NavBarButton name={'WORK'} />
            <div className='circle' />
            <NavBarButton name={'SKILLS'} />
            <NavBarButton name={'PROJECTS'} />
        </div>
    );
}
