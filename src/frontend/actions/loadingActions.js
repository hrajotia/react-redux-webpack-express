import * as actionTypes from '../constants/actionTypes';

export const showLoading = () => {
  return {
    type: actionTypes.SHOW_LOADING
  }
}

export const hideLoading = () => {
  return {
    type: actionTypes.HIDE_LOADING
  }
}

export const resetLoading = () => {
  return {
    type: actionTypes.RESET_LOADING
  }
}
