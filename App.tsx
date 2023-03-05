import React from 'react';
import Navigators from './src/navigators';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
