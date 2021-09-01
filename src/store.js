import {createStore, combineReducers} from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'counter_add':
      return state + 1;
    case 'counter_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return state;
  }
}
function unit1Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit1_add':
      return state + 1;
    case 'unit1_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit1change':
      return action.payload;
    default:
      return state;
  }
}
function unit2Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit3Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit4Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit5Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit6Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit7Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit8Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit9Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
function unit10Reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  counter: counterReducer,
  unit1: unit1Reducer,
  unit2: unit2Reducer,
  unit3: unit3Reducer,
  unit4: unit4Reducer,
  unit5: unit5Reducer,
  unit6: unit6Reducer,
  unit7: unit7Reducer,
  unit8: unit8Reducer,
  unit9: unit9Reducer,
  unit10: unit10Reducer,
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('current state', store.getState());
});
export default store;
