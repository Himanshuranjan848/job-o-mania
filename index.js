import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from "./userSlice";


const MainReducer = combineReducers({
  user:userReducer,
})

const store = createStore(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <App/>
    </Provider>,
  document.getElementById('root')
);