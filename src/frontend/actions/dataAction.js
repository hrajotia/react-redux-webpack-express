import * as types from '../constants/actionTypes';
import { wrapCall } from '../utils/serviceUtils';
import { api } from '../services';

export const fetchData = () => {
  return wrapCall(
    api.get(`/data`),
    types.FETCH_DATA
  );
};
