import React from 'react';
import Besion from '../Besion/Besion';

import Header from '../Header/Header';
import Pme from '../Pme/Pme';
import PmeMain from '../PmeMain/PmeMain';
import Service from '../Service/Service';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import PmeEnd from './../Pme/PmeEnd';



const Index = () => {
    return (
        <div>
            <Header/>
            <WhoWeAre/>
            <Service/>
            <Besion/>
            <Pme/>
            <PmeMain/>
            <PmeEnd/>
        </div>
    );
};

export default Index;