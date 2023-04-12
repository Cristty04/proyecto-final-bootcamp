import { combineReducers } from "redux";
import ArticlesReducer from "./articles/reducer";
import EventsReducer from "./events/reducer";
import HoroscoposReducer from "./horoscopos/reducer";


const rootReducer = combineReducers({
    ArticlesReducer,
    EventsReducer, 
    HoroscoposReducer,
    // AuthReducer,
    //Todos los reducer de cada cartpeta, y hay que importalos, para combinarlos todos.
})

export default rootReducer