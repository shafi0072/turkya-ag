import React from 'react';
import './Besion.scss';
import Slicks2 from './Slicks2';
const Besion = () => {
    return (
        <div className="container mt-5 mb-5 customBesion">
            <h2 className="textTransform">
                <span className="besion">Besoin</span> d'autres procédés de fabrication que l'impression 3D?</h2>
            <p className="besionPara mt-4">Vous avez besoin de prototypes métalliques, de
                composantes d’outillage plus robustes ou êtes en période de transition de vos
                prototypes vers votre production ? Nous pouvons vous aider en vous fournissant
                de petits volumes de production reliés à des procédés de fabrication métallique
                plus traditionnels.</p>
                <Slicks2/>
        </div>
    );
};

export default Besion;