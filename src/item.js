import React from 'react';

const Item = (props) => {
  return (
    <div id="cart_stuff">
      <img src={props.src} alt={props.alt} />
      <div cart_stuff_inside>
        <p>{props.category}</p>
        <p>{props.alt}</p>
        <p>{props.price}</p>
        <div>
          <span>-</span>
          <input type="text" id="input_total" />
          <span>+</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
