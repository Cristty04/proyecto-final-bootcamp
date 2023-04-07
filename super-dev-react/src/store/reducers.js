import { combineReducers } from "redux";
import ArticlesReducer from "./articles/reducer";
import EventsReducer from "./events/reducer";
import HoroscopoReducer from "./horoscopo/reducer";


const rootReducer = combineReducers({
    ArticlesReducer,
    EventsReducer, 
    HoroscopoReducer,
    // AuthReducer,
    //Todos los reducer de cada cartpeta, y hay que importalos, para combinarlos todos.
})

export default rootReducer