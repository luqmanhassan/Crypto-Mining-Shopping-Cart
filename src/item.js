import React from 'react';
import {useDispatch} from 'react-redux';

const Item = (props) => {
  const type1 = props.type1;
  const type2 = props.type2;
  const dispatch = useDispatch();

  return (
    <div id={props.id} className="cart_stuff">
      <div id="stuff1">
        <img src={props.src} alt={props.alt} />
        <p>{props.alt}</p>
        <p>{props.price}</p>
      </div>

      <div id="stuff2">
        <span
          onClick={() => {
            dispatch({type: type2});
          }}
        >
          -
        </span>
        {props.children}

        <span
          onClick={() => {
            dispatch({type: type1});
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};
export default Item;
