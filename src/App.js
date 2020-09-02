/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-01 17:18:49
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-01 23:03:44
 */
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <HYMain/>
    </Provider>
  )
}

export default App;

