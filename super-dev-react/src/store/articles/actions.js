import axios from 'axios';
import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL,

    GET_SINGLE_POST,
    GET_SINGLE_POST_OK,
    GET_SINGLE_POST_FAIL
} from './actionTypes';

//Aqui hay una reaccion'funcion' por cada acción
export function actionGetPosts(){
    return{
        type: GET_POSTS
    }
}

export function actionGetSinglePost(postId){
    return{
        type: GET_SINGLE_POST,
        payload: postId,
    }
}

export function actionGetPostsOk(posts){
    return{
        type: GET_POSTS_OK,
        payload: posts
        
    }    
}

export function actionGetSinglePostOk(post){
    return{
        type: GET_SINGLE_POST_OK,
        payload: post
        
    }    
}

export function actionGetPostsFail(error){
    return{
        type: GET_POSTS_FAIL,
        payload: error,
    }
}

export function actionGetSinglePostFail(error){
    return{
        type: GET_SINGLE_POST_FAIL,
        payload: error,
        
    }
}

//Aqui petición a la Api 
export function getPosts(){
    return async (dispatch)=>{
        //empizo a pedir los post
        dispatch(actionGetPosts())
//como es asyncrona tiene que tener un await, y hacemos un 'if else' con el try-catch.El data es el array de post que pedimos en la api, ya que si solo ponemos el response, nos dará muuucha info.
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(actionGetPostsOk(response.data))
        }catch(error){
            dispatch(actionGetPostsFail(error))
        }
    }
};

export function getSinglePost(postId){
    return async (dispatch)=>{
        //empizo a pedir los post
        dispatch(actionGetSinglePost(postId))
//como es asyncrona tiene que tener un await, y hacemos un 'if else' con el try-catch.El data es el array de post que pedimos en la api, ya que si solo ponemos el response, nos dará muuucha info.
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            dispatch(actionGetSinglePostOk(response.data))
        }catch(error){
            dispatch(actionGetSinglePostFail(error))
        }
    }
};