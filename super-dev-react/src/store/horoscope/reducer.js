import {
    GET_HOROSCOPE,
    GET_HOROSCOPE_OK,
    GET_HOROSCOPE_FAIL,
} from './actionTypes';

const initalState ={
    horoscopes:[],
    loadingHoroscopes:false,
    error: {
        message:""
    }
}

export default function HoroscopeReducer(state = initalState, action){
    switch(action.type) {
        case GET_HOROSCOPE:
            state = {...state, loadingHoroscopes: true}
            break

        case GET_HOROSCOPE_OK:
            state = {...state, loadingHoroscopes: false, horoscopes: action.payload}
            break

        case GET_HOROSCOPE_FAIL:
            state = {...state, loadingHoroscopes: false, horoscopes:[], error: {message:action.payload}}
            break        
        
        default:
            break
    }
    return state
}