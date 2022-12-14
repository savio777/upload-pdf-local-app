import React from 'react';
import {Provider} from 'react-redux';

import Home from './src/screens/Home';
import store from './src/store';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
