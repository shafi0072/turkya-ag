import React from 'react';

import './Header.scss';
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div className="headerBackground">
            <Navbar/>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="headingMargin">
                        <h1 className="text-light headingText">Bienvenue chez The Shark 3D</h1>
                        <h2 className="text-light paragraphHeading">Services de conception et de fabrication additive Impression<br/>3D industrielle</h2>
                        <button className="btn btn-custom">Soumission</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;