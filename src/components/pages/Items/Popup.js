import React from 'react';
import "./Popup.css"

function Popup(props) {
   
    return (

        <div className="popup-section">
            
            <div className="popup-content">
                <h3>Item name willl be show here</h3>
                <button className="order-btn">order now</button>
                <h5 className="popup-close" onClick={props.close}>close</h5>
            </div>
        </div>
        )
        
        
      
}

export default Popup;
