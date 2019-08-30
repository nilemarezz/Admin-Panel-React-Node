import React from 'react'
import ReactDOM from 'react-dom'

import App from './component/App'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'));