import initialState from "./initialState";
const _ = require('lodash');

export default function rootReducer (state = initialState, action){
    console.log(action);
    switch(action.type){
        case 'SET_LOADING':
            return {...state, loading: action.payload == null ? true : action.payload}
        case 'SET_USER':
            return {...state, user: action.payload, errors: null, loading: false}
        case 'SET_ERRORS':
            return {...state, errors:  (state.errors === false)? action.payload : _.concat(state.errors, action.payload), loading: false}
        case 'SET_PARAM':
            return {...state, [action.payload[0]]: action.payload[1], loading: false}
        default:
            return state;
    }
}