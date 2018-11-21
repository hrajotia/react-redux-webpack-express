import * as types from '../constants/actionTypes';

let loadingCounter = 0;

export default function loadingReducer(state, action) {

  switch (action.type) {
    case types.FETCH_DATA: {
      loadingCounter += 1;
    }
    break;

    case types.FETCH_DATA_SUCCESS:
    case types.FETCH_DATA_FAILURE: {
      loadingCounter -= 1;
    }
    break;

    case types.RESET_LOADING:
      loadingCounter = 0;
  }

  return (loadingCounter > 0) ? true : false;

}
