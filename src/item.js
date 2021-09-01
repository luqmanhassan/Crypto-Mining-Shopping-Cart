import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Item = (props) => {
  const change = props.change;
  const type1 = props.type1;
  const type2 = props.type2;
  const dispatch = useDispatch();
  const _unit1 = useSelector((state) => state.unit1);

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
            dispatch({type: type1});
          }}
        >
          -
        </span>
        <input
          type="text"
          id="input_total"
          onChange={(ev) => {
            dispatch({type: change, payload: ev.target.value});
          }}
        >
          {_unit1}
        </input>
        <span
          onClick={() => {
            dispatch({type: type2});
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};
export default Item;
