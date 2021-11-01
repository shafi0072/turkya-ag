import React from 'react';

import './Header.scss';
import Navbar from './../Navbar/Navbar';
const Header = () => {
    return (
        <div className="headerBackground">
            <Navbar/>
        </div>
    );
};

export default Header;