import React from 'react'
import Hero from '../Hero'
import { homeObjFour } from '../../Data/Data';

function Signup() {
    return (
        <div>
            <Hero {...homeObjFour}/>
        </div>
    );
}

export default Signup;