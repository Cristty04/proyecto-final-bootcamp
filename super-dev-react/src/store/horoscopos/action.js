import axios from "axios";
import {
  GET_HOROSCOPOS,
  GET_HOROSCOPOS_OK,
  GET_HOROSCOPOS_FAIL,
} from "./actionType";

export function actionGetHoroscopos(){
    return{
        type:GET_HOROSCOPOS
    }
}

export function actionGetHososcoposFail(error){
    return{
        type: GET_HOROSCOPOS_FAIL,
        payload: error,
    }
}

export function getHoroscopos(){
    return async(dispatch)=>{
        dispatch(actionGetHoroscopos())
        try{
            const response = await axios.get("http://localhost:3000/horoscopos")
            dispatch(actionGetHoroscopos(response.data))
        } catch(error){
            dispatch(actionGetHososcoposFail(error))
        }
    }
};
