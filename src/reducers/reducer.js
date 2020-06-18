/* eslint-disable prettier/prettier */
import {ADD_TOKEN, UPDATE_LOGIN} from '../actions/types';

const iState = {
  token: '',
  name: 'David',
  categories: [
    {id: 1, name: 'Ocean'},
    {id: 2, name: 'Play'},
    {id: 3, name: 'Play'},
  ],
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  isLogged: false,
};

const reducer = (state = iState, action) => {
  console.log('sss' + state.token);
  if (action.type === ADD_TOKEN) {
    return {
      ...state,
      token: action.data,
    };
  } else if (action.type === UPDATE_LOGIN) {
    return {
      ...state,
      isLogged: action.data,
    };
  } else {
    return state;
  }
};

export default reducer;
