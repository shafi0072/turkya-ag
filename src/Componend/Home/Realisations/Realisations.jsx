import React from 'react';
import Path1 from '../../../Resorce/images/Path 5297.png';
import Line from '../../../Resorce/images/Line 8.png';
import Img1 from '../../../Resorce/images/Robot Capra.png';
import Img2 from '../../../Resorce/images/Robot Capra1.png';
import Img3 from '../../../Resorce/images/Robot Capra2.png';
import Img4 from '../../../Resorce/images/Robot Capra3.png';
import Img5 from '../../../Resorce/images/Robot Capra4.png';
import Img6 from '../../../Resorce/images/Robot Capra5.png';
import Img7 from '../../../Resorce/images/Robot Capra6.png';
import Img8 from '../../../Resorce/images/Robot Capra7.png';
import Img9 from '../../../Resorce/images/Robot Capra8.png';
import Img10 from '../../../Resorce/images/Robot Capra9.png';
import Img11 from '../../../Resorce/images/Robot Capra10.png';
import Img12 from '../../../Resorce/images/Robot Capra11.png';
import './Realisations.scss';

const Realisations = () => {
    return (
        <div className="realisations-container">
            <img className="circle1" src={Path1}/>
            <div className="container">
                <h1 className="realisations-title">N<span className="btm-border">os réali</span>sations</h1>
                <p className="realisations-p my-4">Le monde de l'impression 3D est parfois un réseau enchevêtré de technologies, de matériaux et de nouveaux processus et capacités, ce qui peut rendre la navigation dans l'écosystème de l'impression 3D difficile. Mekanisk vous accompagne dans vos proje</p>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img1} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img2} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img3} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img4} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img5} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img6} alt=""/>
                            <div class="card-body">
                                <p class="card-text">"TEXTE"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img7} alt=""/>
                            <div class="card-body">
                                <p class="card-text">Industriel</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img8} alt=""/>
                            <div class="card-body">
                                <p class="card-text">Pharmaceutique</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img9} alt=""/>
                            <div class="card-body">
                                <p class="card-text">Robotique</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img10} alt=""/>
                            <div class="card-body">
                                <p class="card-text">Automobile</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img11} alt=""/>
                            <div class="card-body">
                                <p class="card-text">transport</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={Img12} alt=""/>
                            <div class="card-body">
                                <p class="card-text">Professionnels et start-ups</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="circle2" src={Path1}/>
        </div>
    );
};

export default Realisations;