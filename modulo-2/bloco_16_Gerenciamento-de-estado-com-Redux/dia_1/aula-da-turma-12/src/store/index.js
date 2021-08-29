import * as Redux from 'redux';
import { combineReducers } from 'redux';



export function changeTheTheme(theme) {
  return {
    type: 'CHANGE_THE_THEME',
    theme,
  }
}

export function increaseNumber() {
  return{ type: 'INCREASE' };
}

export function decreaseNumber() {
  return{ type: 'DECREASE' };
}

const STATE_INITIAL_THEMA = { theme: 'light' };

function reducer(state = STATE_INITIAL_THEMA, action) {
  switch(action.type) {
    case 'CHANGE_THE_THEME':
      return { theme: action.theme};
    default:
      return state;
  }
}

const STATE_INITIAL_COUNTER = { num: 0 }

function reducerCounter(state = STATE_INITIAL_COUNTER, action) {
  switch(action.type) {
    case 'INCREASE':
      return { num: state.num + 1 };
    case 'DECREASE':
      return { num: state.num - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
  reducerCounter,
})

const store = Redux.createStore(rootReducer);

export default store;
