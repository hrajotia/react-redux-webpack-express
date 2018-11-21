import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import Root from './components/Root';

const rootEl = document.getElementById('app');

const render = (Component, store) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl
  );
};

configureStore(initialState, store => {

  render(Root, store);

  if (typeof module !== 'undefined' && module.hot) {
    module.hot.accept('./components/Root', () => {
      const NewRoot = require('./components/Root.js').default;
      render(NewRoot, store);
    });
  }
});
