import React from 'react';
import "./ItemHeader.css"

function ItemHeader(props) {
  return <div>
      <h2 className="item-name">{props.itemName}</h2>
  </div>;
}

export default ItemHeader;
