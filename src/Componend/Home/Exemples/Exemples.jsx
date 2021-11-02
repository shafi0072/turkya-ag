import React from 'react';
import Icon1 from '../../../Resorce/images/Group 1406.png';
import Icon2 from '../../../Resorce/images/rotation.png';
import Icon3 from '../../../Resorce/images/Group 1329.png';
import Icon4 from '../../../Resorce/images/cogwheels.png';
import Icon5 from '../../../Resorce/images/Group 1330.png';
import Icon6 from '../../../Resorce/images/Group 1331.png';
import Icon7 from '../../../Resorce/images/Group 902.png';
import './Examples.scss';

const Exemples = () => {
    return (
        <div className="examples-container">
            <div className="container my-5 py-5">
                <h1 className="text-light examples-title"><span className="btm-border">Exemple</span>s d'application</h1>
                <div className="row my-4">
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon1} alt="" />
                            <div  className="text-left">
                                <h5>Composants mécaniques</h5>
                                <p>Pièces robustes renforcées de fibres composites (produits Markforged)Matériaux ESD (décharge électrostatique)Matériaux FR « flame resistant »</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon2} alt="" />
                            <div  className="text-left">
                                <h5>remplacement</h5>
                                <p>Remplacement de pièces en rupture de stock Pièces pour réparation Pièces de rechange</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon3} alt="" />
                            <div  className="text-left">
                                <h5>Maquette de présentation</h5>
                                <p>Projet d’architecture Preuve de concept Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon4} alt="" />
                            <div  className="text-left">
                                <h5>Prototypes fonctionnels</h5>
                                <p>Pièces ou assemblages pour des tests fonctionnels, ergonomiques ou des preuves de concept</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon5} alt="" />
                            <div  className="text-left">
                                <h5>Production</h5>
                                <p>Outillage / GabaritsOutillage pour atelier de production Gabarit d’inspection, de production ou de test Outillage personnalisé / adapté pour atelier d’artisanat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon6} alt="" />
                            <div  className="text-left">
                                <h5>Projets spéciaux</h5>
                                <p>Projet personnel ou professionnelProjet étudiant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-5">
                        <div className="d-flex fustify-content-center align-items-center">
                            <img className="icon" src={Icon7} alt="" />
                            <div  className="text-left">
                                <h5>Petites séries de production (+1 000)</h5>
                                <p>Pré-production de pièces destinées à l’injection plastiques Production de pièces où l’achat de moules est difficilement justifiable Grande flexibilité sur la quantité de pièces commandées à chaque commande / livraisons progressives</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Exemples;