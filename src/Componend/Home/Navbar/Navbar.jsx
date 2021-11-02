import React from 'react';
import './Navbar.scss'
const Navbar = () => {
    return (

    <div className="navbar-container">
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand navLogoFont" href="#">THE SHARK</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-menu-container" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-active">
                            <a className="nav-link nav-active text-light" href="#">The Shark
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Easi-Evaluation in Ayres Sensory integration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">English</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    );
};

export default Navbar;