import axios from 'axios';
import {
    GET_HOROSCOPE,
    GET_HOROSCOPE_OK,
    GET_HOROSCOPE_FAIL,
} from './actionTypes';
//Aqui hay una reaccion'funcion' por cada acción
export function actionGetHoroscope(){
    return{
        type: GET_HOROSCOPE
    }
}

export function actionGetHoroscopeOk(horoscope){
    return{
        type: GET_HOROSCOPE_OK,
        payload: horoscope
    }    
}

export function actionGetHoroscopeFail(error){
    return{
        type: GET_HOROSCOPE_FAIL,
        payload: error,
    }
}

//Aqui petición a la Api 
export function getPosts(){
    return async (dispatch)=>{
        //empizo a pedir los post
        dispatch(actionGetHoroscope())
//como es asyncrona tiene que tener un await, y hacemos un 'if else' con el try-catch.El data es el array de post que pedimos en la api, ya que si solo ponemos el response, nos dará muuucha info.
        try{
            const response = await axios.get("http://localhost:3000/horoscopo")
            dispatch(actionGetHoroscopeOk(response))
        }catch(error){
            dispatch(actionGetHoroscopeFail(error))
        }
    }
};