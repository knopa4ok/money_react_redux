const axios = require('axios');
const _ = require('lodash');

export const setLoading = (value = true) => {
    return {
        type: 'SET_LOADING',
        payload: value
    }
}
export const setUser = (user) =>{
    if(user == null){
        localStorage.removeItem('user');
    }else{
        localStorage.setItem('user', JSON.stringify(user));
    }
    return {
        type: 'SET_USER',
        payload: user
    }
}
export const setErrors = (errors) =>{
    return {
        type: 'SET_ERRORS',
        payload: errors
    }
}
export const login = (data) =>{
    return async (dispatch) =>{
        dispatch(setLoading())

        try{
            const res = await axios.post('https://moneyapi.malinovski.eu/oapi/login', data);
            if(!res.data.errors){
                dispatch(setUser(res.data))
            }else{
                dispatch(setErrors(res.response.data.errors))
            }
        }catch(e){
            dispatch(setErrors(e.response.data.errors))
        }
    }
}
export const logout = () => dispatch => {
    dispatch(setUser(null));
}
export const validateToken = (token) =>{
    return async(dispatch) =>{
        dispatch(setLoading());

        const res = await axios.post('https://moneyapi.malinovski.eu/oapi/validateToken', {token: token});
        if(!res.data.valid){
            dispatch(logout());
            dispatch(setErrors(['Token is not valid']))
        }
        dispatch(setLoading(false))
    }
}
export const setParam = (param, value) =>{
    return {
        type: 'SET_PARAM',
        payload: [param, value]
    }
}
export const removeParam = (param) =>{
    return setParam(param, null)
}
export const sendGet = (url, variable, token) =>{
    return async (dispatch) =>{
        dispatch(setLoading());

        let options = {};
        if(token){
            options.headers = {Authorization: token};
        }
        try{
            const ret = await axios.get('https://moneyapi.malinovski.eu'+url, options);
            if(!ret.data.errors){
                dispatch(setParam(variable, ret.data))
            }else{
                dispatch(setErrors(ret.data.errors));
            }
        }
        catch(e){
            dispatch(setErrors(e));
        }
        
    }
}