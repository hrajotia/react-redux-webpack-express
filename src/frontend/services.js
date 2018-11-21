// Data Services

import {create} from 'apisauce';

// Default API root is same server, same protocol
const APP_BASE_URI = '/';
const API_ROOT = '/api/v1';

const jwtToken = localStorage.getItem('token');

// access to our main API
export const api = create({
  baseURL: API_ROOT,
  headers: {'Authorization': 'Bearer ' + jwtToken}
});

api.addMonitor((response) => {
  if (response.status === 401) {
    window.location.href = APP_BASE_URI + 'login';
  }
});

api.addRequestTransform(request => {
  const bustParam = (request.url.indexOf('?') === -1 ? '?' : '&') + '_=' + Date.now();
  request.url += bustParam;
});
