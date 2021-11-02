import React from 'react';
import './PmeMain.scss';
import check from '../../../Resorce/images/Icon awesome-check-circle.png';
import image from '../../../Resorce/images/Group1271.png'
const PmeMain = () => {
    return (
        <div className="container mt-5">
            <h2><span className="PmeMainHeader">PME ou </span>« start up » ?</h2>
            <div className="row">
                <div className="col-md-6">
                    <h6>Bénéficiez d'un accompagnement personnalisé pour sélectionner  la stratégie de conception et de fabrication la plus avantageuse selon vos besoins!</h6><br />
                    <h6>Réduisez  vos coûts de fabrication, les délais de livraison et le temps d'assemblage en:</h6>
                    <div className="d-flex align-items-center mt-5">
                        <img src={check} style={{width:'4%', height:'4%'}} alt="" />
                        <h6 className="ml-2">Remplacement d'une pièce usinée par une pièce imprimée(remplacement direct de pièce)</h6>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <img src={check} style={{width:'4%', height:'4%'}} alt="" />
                        <h6 className="ml-2">Adapter votre conception pour inclure des pièces imprimées(Adapt for Additive Manufacturing - AfAM)</h6>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <img src={check} style={{width:'4%', height:'4%'}} alt="" />
                        <h6 className="ml-2">Conception et optimisation de vos pièces pour la fabrication 
additive (Design for Additive Manufacturing - DfAM)</h6>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="d-flex justify-content-center">
                    <img src={image} style={{width:'80%'}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PmeMain;