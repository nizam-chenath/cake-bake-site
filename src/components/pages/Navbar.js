import React from 'react';
import { Link } from 'react-router-dom';
import { GiCakeSlice} from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                 <div className="navbar-container container">
                     <Link to='/' className="navbar-logo">
                         <GiCakeSlice className='navbar-icon'/>
                         CakeBake
                     </Link>
                     <div className="menu-icon">
                         {}
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Navbar
