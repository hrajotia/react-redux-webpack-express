import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function dataReducer(state = initialState.data, action) {

  switch (action.type) {
    case types.FETCH_DATA_SUCCESS: {
      return action.data;
    }
    break;

    case types.FETCH_DATA_FAILURE:{
      return state;
    }
    break;
  }

  return state;

}
