import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  data: dataReducer,
});

export default rootReducer;
