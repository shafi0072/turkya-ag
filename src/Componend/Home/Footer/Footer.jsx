import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="pt-5">
            <div className="footer-container">
                <div className="container my-4">
                <div className="row">
                    <div className="col-md-3 footer-title-container d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="footer-title">The Shark</h1>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row footer-menu-items">
                            <div className="col-md-3">
                                <h6 className="mb-4 d-flex justify-content-start text-left">Department</h6>
                                <div className="text-left d-flex justify-content-start">
                                    <ul className="footer-items-container">
                                        <li><a className="footer-link py-1" href="#">Elderly And Disablity</a></li>
                                        <li><a className="footer-link" href="#">Pricing</a></li>
                                        <li><a className="footer-link" href="#">Press</a></li>
                                        <li><a className="footer-link" href="#">Resources</a></li>
                                        <li><a className="footer-link" href="#">Media Program</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h6 className="mb-4 d-flex justify-content-start text-left">Corporate</h6>
                                <div className="text-left d-flex justify-content-start">
                                    <ul className="footer-items-container">
                                        <li><a className="footer-link py-1" href="#">Elderly And Disablity</a></li>
                                        <li><a className="footer-link" href="#">Pricing</a></li>
                                        <li><a className="footer-link" href="#">Press</a></li>
                                        <li><a className="footer-link" href="#">Resources</a></li>
                                        <li><a className="footer-link" href="#">Media Program</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h6 className="mb-4 d-flex justify-content-start text-left">News And Media</h6>
                                <div className="text-left d-flex justify-content-start">
                                    <ul className="footer-items-container">
                                        <li><a className="footer-link py-1" href="#">Elderly And Disablity</a></li>
                                        <li><a className="footer-link" href="#">Pricing</a></li>
                                        <li><a className="footer-link" href="#">Press</a></li>
                                        <li><a className="footer-link" href="#">Resources</a></li>
                                        <li><a className="footer-link" href="#">Media Program</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h6 className="mb-4 d-flex justify-content-start text-left">Experience</h6>
                                <div className="text-left d-flex justify-content-start">
                                    <ul className="footer-items-container">
                                        <li><a className="footer-link py-1" href="#">Elderly And Disablity</a></li>
                                        <li><a className="footer-link" href="#">Pricing</a></li>
                                        <li><a className="footer-link" href="#">Press</a></li>
                                        <li><a className="footer-link" href="#">Resources</a></li>
                                        <li><a className="footer-link" href="#">Media Program</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
            </div>
            <div className="copyright pt-3">
                <p>Copyright © 2021 The Shark. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;