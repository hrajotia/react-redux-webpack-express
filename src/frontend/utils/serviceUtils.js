// Service call wrapper
// returns 'thunk' function that wraps service calls with fetch notifications (init, success, failure)
// Handles traditionally caught errors as well as apisauce 'problems'
// 'action_type' is used to generate init, success, and failure action types
export const wrapCall = (promise, action_type, init_args={}) => {
  return dispatch => {
    const {init, success, fail} = actionTypes(action_type);
    dispatch({type: init, promise, ...init_args});
    return promise
      .then(resp => {
        // check for valid response
        if (resp && resp.ok) {
          return dispatch({type: success, data: resp.data, headers: resp.headers, ...init_args});

          //suppress notification on 404 errors, which are expected from the API
        } else if (resp.status === 404) {
          return dispatch({type: fail, data: resp.data, error: resp.problem, headers: resp.headers, ...init_args});

          //all other errors get reported
        } else {
          // Unified apisauce errors flow through here
          return dispatch({type: fail, data: resp.data, error: resp.problem, headers: resp.headers, ...init_args});
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        // redux and other errors come here
        dispatch({type: fail, error: error, ...init_args});
      });
  };
};

// async action type template
// ex:
// const { init , success, fail } = actionTypes('THING')
export const actionTypes = (prefix = 'fetch_data') => {
  prefix = prefix.toUpperCase();
  return {
    init: prefix,
    success: prefix + '_SUCCESS',
    fail: prefix + '_FAILURE'
  };
};
