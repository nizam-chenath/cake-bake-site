import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiCakeSlice} from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = () =>{
        if(window.innerwidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
    
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <div className="navbar">
                 <div className="navbar-container container">
                     <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                         <GiCakeSlice className='navbar-icon'/>
                         CakeBake
                     </Link>
                     <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                             <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                         </li>
                         
                         <li className="nav-btn">
                             {button ? (
                                 <Link to="/sign-up" className="btn-link">
                                     <Button buttonStyle='btn--outline'>Sign Up</Button>
                                 </Link>
                             ) :
                             (
                                 <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                     <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Sign Up</Button>
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
