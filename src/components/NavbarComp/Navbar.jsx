import './Navbar.css';
import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBarButton({ name, path }) {
    return (
        <Link to={path} className='navBarButton'>
            {name}
        </Link>
    );
}

NavBarButton.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

const Navbar = () => {
    return (
        <div className='navBar'>
            <NavBarButton name={'HOME'} path={'/'} />
            <NavBarButton name={'WORK'} path={'/work'} />
            <div className='circle' />
            <NavBarButton name={'SKILLS'} path={'/skills'} />
            <NavBarButton name={'PROJECTS'} path={'/projects'} />
        </div>
    );
}

export default Navbar;
