import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../../Data/Data'
import Hero from '../Hero'
import Pricing from '../Pricing';

function Home() {
    return (
        <div>
            <Hero {...homeObjOne}/>
            <Hero {...homeObjThree}/>
            <Hero {...homeObjTwo}/>
            <Pricing/>
            <Hero {...homeObjFour}/>
           
        </div>
    );
}

export default Home;
