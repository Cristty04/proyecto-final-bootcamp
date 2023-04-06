import {
    GET_EVENTS,
    GET_EVENTS_OK,
    GET_EVENTS_FAIL,
} from './actionTypes';

const initalState ={
    events:[],
    loadingEvents:false,
    error: {
        message:""
    }
}


export default function EventsReducer(state = initalState, action){
    switch(action.type) {
        case GET_EVENTS:
            state = {...state, loadingEvents: true}
            break

        case GET_EVENTS_OK:
            state = {...state, loadingEvents: false, events: action.payload}
            break

        case GET_EVENTS_FAIL:
            state = {...state, loadingEvents: false, events:[], error: {message:action.payload}}
            break        
        
        default:
            break
    }
    return state
}