import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL,
    GET_SINGLE_POST,
    GET_SINGLE_POST_OK
} from './actionTypes';

const initalState ={
    posts:[],
    loadingPosts:false,
    post: {},
    loadingSinglePost: false,
    error: {
        message:""
    }
}


export default function ArticlesReducer(state = initalState, action){
    switch(action.type) {
        case GET_POSTS:
            state = {...state, loadingPosts: true}
            break
// añadir ñapa a singleArticle_OK despues de true, post{} así evitamos que se quede el anterior cargado en la store.minuto 1:10.
        case GET_POSTS_OK:
            state = {...state, loadingPosts: false, posts: action.payload}
            break

        case GET_POSTS_FAIL:
            state = {...state, loadingPosts: false, posts:[], error: {message:action.payload}}
            break        
        
        

        case GET_SINGLE_POST:
            state = {...state, loadingSinglePost: true}
            break

        case GET_SINGLE_POST_OK:
            state = {...state, loadingSinglePost: false, post: action.payload}
            break

        case GET_POSTS_FAIL:
            state = {...state, loadingSinglePost: false, post: {}, error: {message: action.payload}}
            break
            
        default:
            break
    
    }
    return state
}