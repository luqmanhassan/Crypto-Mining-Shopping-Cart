import {createStore} from 'redux';
let mystate = {mybagbag: 0};
function reducer(state = mystate, action) {
  switch (action.type) {
    case 'money':
      return {...mystate, yomoma: 10};
    default:
      return state;
  }
}

const store = createStore(reducer);
/*
store.subscribe(() => {
  console.log('You are subscribed sir', store.getState());
  render
});

store.dispatch({
    type: ,
    payload: 
}

);
*/
export default store;
