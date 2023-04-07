import {  
    GET_HOROSCOPOS, 
    GET_HOROSCOPOS_OK,
    GET_HOROSCOPOS_FAIL,
} from './actionType';

const initialState ={
    horoscopos:[],
    loadingHoroscopos:false,
    error:{
        message:""
    }
}

export default function HoroscopoReducer(state=initialState, action){
    switch(action.type) {
        case GET_HOROSCOPOS:
            state= {...state,loadingHoroscopos:true}
            break
        
        case GET_HOROSCOPOS_OK:
            state = {...state, loadingHoroscopos: false, horoscopos: action.payload}
            break

        case GET_HOROSCOPOS_FAIL:
            state = {...state, loadingPost: false, posts:[], error: {message:action.payload}}
            break
        default:
            break
    }
    return state
    }
