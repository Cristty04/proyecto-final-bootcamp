import axios from "axios";
import {
    GET_EVENTS,
    GET_EVENTS_OK,
    GET_EVENTS_FAIL,
} from './actionTypes';

//Aqui hay una reaccion'funcion' por cada acción
export function actionGetEvents(){
    return{
        type: GET_EVENTS
    }
}

export function actionGetEventsOk(events){
    return{
        type: GET_EVENTS_OK,
        payload: events
    }    
}

export function actionGetEventsFail(error){
    return{
        type: GET_EVENTS_FAIL,
        payload: error,
    }
}

    //Aqui petición a la Api
export function getEvents(){
    return async(dispatch)=>{
        //empizo a pedir la info
        dispatch(actionGetEvents())
    //como es asyncrona tiene que tener un await, y hacemos un 'if else' con el try-catch.El data es el array de post que pedimos en la api, ya que si solo ponemos el response, nos dará muuucha info.
        try{
            const response = await axios.get("http://localhost:3000/events")
            dispatch(actionGetEventsOk(response.data))
        }catch(error){
            dispatch(actionGetEventsFail(error))
        }
    }
    
};