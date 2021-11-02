import React from 'react';
import './Livraison.scss';

const Livraison = () => {
    return (
        <div className="livraison-container my-5">
            <div className="container">
                <h1 className="livraison-title"><span className="btm-border">Livra</span>ison</h1>
                <p className="livraison-p">Nos colis sont préparés avec le plus grand soin. Recevez vos pièces par livraison express partout au Canada. Nous expédions également à l'international.</p>
                <button className="btn">Contactez-nous</button>
            </div>
        </div>
    );
};

export default Livraison;