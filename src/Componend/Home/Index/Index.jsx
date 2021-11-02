import React from 'react';
import Besion from '../Besion/Besion';
import Header from '../Header/Header';
import Pme from '../Pme/Pme';
import PmeMain from '../PmeMain/PmeMain';
import Service from '../Service/Service';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

import Exemples from '../Exemples/Exemples';

import PmeEnd from './../Pme/PmeEnd';
import Realisations from '../Realisations/Realisations';




const Index = () => {
    return (
        <div>
            <Header/>
            <WhoWeAre/>
            <Service/>
            <Besion/>

            <Exemples/>

            <Pme/>
            <PmeMain/>
            <PmeEnd/>
            <Realisations/>

        </div>
    );
};

export default Index;