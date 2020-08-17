import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routers/routes'
import { applyMiddleware, createStore } from 'redux'

//middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import reducers from './reducers/reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);