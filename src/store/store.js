import { reducer as formReducer } from 'redux-form';
const { createStore, applyMiddleware, combineReducers } = require('redux')
const { default: thunk } = require('redux-thunk');
const { default: rootReducer } = require('./reducer');

const reducers = combineReducers({
    form: formReducer,
    root: rootReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store;