import React from 'react'
import Hero from '../Hero'
import { homeObjThree, homeObjTwo } from '../../Data/Data';
import { useEffect } from 'react'



function Services() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            
            <Hero {...homeObjTwo}/>
            <Hero {...homeObjThree}/>
            
           
        </div>
    );
}

export default Services;
