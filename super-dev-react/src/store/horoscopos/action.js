import axios from 'axios';
import {  
    GET_HOROSCOPOS, 
    GET_HOROSCOPOS_OK,
    GET_HOROSCOPOS_FAIL,
} from './actionType';

export function actionGetHoroscopos(){
    return{
        type: GET_HOROSCOPOS
    }
}

export function actionGetHoroscoposOk(horoscopos){
    return{
        type: GET_HOROSCOPOS_OK,
        payload: horoscopos
    }
}
export function actionGetHoroscoposFail(error){
    return{
        type: GET_HOROSCOPOS_FAIL,
        payload: error,
    }
}





export function getHoroscopos(){
    return async (dispatch)=>{
        //empizo a pedir los post
        dispatch(actionGetHoroscopos())
        try{
            const response = await axios.get("http://localhost:3000/horoscopos")
            dispatch(actionGetHoroscoposOk(response.data))
        }catch(error){
            dispatch(actionGetHoroscoposFail(error))
        }
    }
};