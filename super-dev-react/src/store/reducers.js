import { combineReducers } from "redux";
import ArticlesReducer from "./articles/reducer";
import EventsReducer from "./events/reducer";
import AuthReducer from "./auth/reducer";

import HoroscoposReducer from "./horoscopos/reducer"

const rootReducer = combineReducers({
    ArticlesReducer,
    EventsReducer, 
    AuthReducer,
    HoroscoposReducer,

    //Todos los reducer de cada cartpeta, y hay que importalos, para combinarlos todos.
})

export default rootReducer