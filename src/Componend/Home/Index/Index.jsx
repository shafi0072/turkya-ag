import React from 'react';
import Besion from '../Besion/Besion';
import Header from '../Header/Header';
import Service from '../Service/Service';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Exemples from '../Exemples/Exemples';



const Index = () => {
    return (
        <div>
            <Header/>
            <WhoWeAre/>
            <Service/>
            <Besion/>
            <Exemples/>
        </div>
    );
};

export default Index;