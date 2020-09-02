/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-01 22:42:55
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-01 22:49:30
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;