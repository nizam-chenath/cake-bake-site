import React from 'react';

function Popup(props) {
  return <div className="popup-section">
      <div className="popup-img">
          <img src={props.popupImg} alt="imagename" />
      </div>
      <div className="popup-imgName">
          <h3>{props.popupImgName}</h3>
      </div>
  </div>;
}

export default Popup;
