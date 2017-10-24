import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import app from './reducers/app.js';

export default createStore(
    // combineReducers({ app }),
    compose(applyMiddleware(thunk))
);