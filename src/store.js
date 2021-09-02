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
      return Number(state + 1);
    case 'unit1_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit1change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit2Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit2_add':
      return Number(state + 1);
    case 'unit2_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit2change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit3Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit3_add':
      return Number(state + 1);
    case 'unit3_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit3change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit4Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit4_add':
      return Number(state + 1);
    case 'unit4_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit4change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit5Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit5_add':
      return Number(state + 1);
    case 'unit5_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit5change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit6Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit6_add':
      return Number(state + 1);
    case 'unit6_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit6change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit7Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit7_add':
      return Number(state + 1);
    case 'unit7_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit7change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit8Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit8_add':
      return Number(state + 1);
    case 'unit8_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit8change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit9Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit9_add':
      return Number(state + 1);
    case 'unit9_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit9change':
      return Number(action.payload);
    default:
      return state;
  }
}
function unit10Reducer(state = 0, action) {
  switch (action.type) {
    case 'unit10_add':
      return Number(state + 1);
    case 'unit10_minus':
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    case 'unit10change':
      return Number(action.payload);
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
