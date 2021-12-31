import React from 'react'
import { homeObjTwo } from './Data'
import Hero from '../Hero'
import Pricing from '../Pricing';

function Products() {
    return (
        <div>
            
            <Pricing/>
            <Hero {...homeObjTwo}/>
           
        </div>
    );
}

export default Products;