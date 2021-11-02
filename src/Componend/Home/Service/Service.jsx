import React from 'react';
import './Service.scss';
import Slicks from './Slicks';

const Service = () => {
    return (
        <div className="container mb-5 mt-5">
            <h1><span className="nos">NOS</span> SERVICES</h1>
            <p className="mt-5 detailsOfService container ">MEKANISK propose des services de conception (Design for Additive Manufacturing - DfAM) et de fabrication additive professionnels, personnalisés et adaptés à vos besoins, expertise basée sur plus de 20 ans en développement de produits dans différentes industries, dont l’aéronautique et la robotique.</p>
            <Slicks/>
        </div>
    );
};

export default Service;