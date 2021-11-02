import React from 'react';
import './WhoWeAre.scss';

import newImage from '../../../Resorce/images/Group8.png'
const WhoWeAre = () => {
    return (
        <div className="mt-5 container mb-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mb-5"><span className='qui'>QUI NO</span>US SOMMES</h1>
                    <h6 className="text-Align">Mekanisk se distingue par son service professionnel et personnalisé en conception et impression 3D, vous permettant d'obtenir les pièces industrielles et fonctionnelles requises pour vos projets</h6>
                    <br />
                    <h6 className="text-Align">Passionnés par les projets de développement de produits en tout genre, nous pouvons vous supporter de la phase conceptuelle jusqu’à la production de votre produit.</h6> <br />
                    <h6 className="text-Align">Que vous souhaitiez valider votre concept préliminaire auprès de clients potentiels, réduire vos coûts ou votre « time to market », valider l'ergonomie de votre conception, ou confirmer la faisabilité de votre projet, nous pouvons vous aider à profiter des solutions innovantes disponibles. Si nous n'avons pas la technologie dont vous avez besoin, vous pouvez profitez de nos contacts avec nos fournisseurs de confiance, tout en respectant vos coûts et échéanciers!</h6>

                </div>
                <div className="col-md-6">
                    <img src={newImage} style={{width:'90%'}} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;