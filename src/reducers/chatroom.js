import { combineReducers } from 'redux';
import messages from './MessageReducers';

const initialState = {
  isFetching: false
};

function meta(state = initialState, action) {
  switch (action.type) {
    case 'SET_IS_FETCHING':
      return Object.assign({}, state, {
          isFetching: action.isFetching
      });
    default:
      return state;
  }
}

const chatroom = combineReducers({
  messages,
  meta
});

export default chatroom