import { combineReducers } from "redux";
import homesReducer from "./homes/homesReducer";
import experienceReducer from './experience/experienceReducer';

const rootReducer = combineReducers({
    homes: homesReducer,
    experience: experienceReducer
})

export default rootReducer;