import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCakeSlice} from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div>
            <div className="navbar">
                 <div className="navbar-container container">
                     <Link to='/' className="navbar-logo">
                         <GiCakeSlice className='navbar-icon'/>
                         CakeBake
                     </Link>
                     <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes/> : <FaBars/>}
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                             <Link to="/" className="nav-links">Home</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to="/" className="nav-links">Products</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to="/" className="nav-links">Services</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to="/" className="nav-links">Contact</Link>
                         </li>
                         <li className="nav-btn">
                             {button ? (
                                 <Link to="/sign-up" className="btn-link">
                                     <Button buttonStyle='btn-outline'>Sign Up</Button>
                                 </Link>
                             ) :
                             (
                                 <Link to="/sign-up" className="btn-link">
                                     <Button buttonStyle="btn-outline" btnSize="btn-mobile">Sign Up</Button>
                                 </Link>
                             )}
                         </li>
                     </ul>
                 </div>
            </div>
        </div>
    )
}

export default Navbar
