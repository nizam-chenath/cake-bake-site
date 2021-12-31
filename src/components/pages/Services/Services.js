import React from 'react'
import Hero from '../Hero'
import { homeObjThree, homeObjTwo } from '../HomePage/Data';


function Services() {
    return (
        <div>
            
            <Hero {...homeObjTwo}/>
            <Hero {...homeObjThree}/>
            
           
        </div>
    );
}

export default Services;
