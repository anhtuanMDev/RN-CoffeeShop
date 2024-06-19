import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Naviagtion from './src/navigator/Naviagtion';
import {store} from './helper/store';
const App = () => {
  return (
    <Provider store={store}>
        <Naviagtion />
    </Provider>
  );
};

export default App;
