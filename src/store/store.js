// /**引入createStore 创建store */
// import { createStore } from 'redux'

// import {composeWithDevTools } from 'redux-devtools-extension' 
// export default (prevState)=>createStore(reducer,composeWithDevTools())
import { createStore, applyMiddleware, compose } from 'redux';
 import reducer from './reducer'
import thunk from 'redux-thunk' 

const composeEnhancers =
 typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  enhancer
);
export default store;