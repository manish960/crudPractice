import {combineReducers} from 'redux';
import apiReducer from './apiReducer';
import { IncreReducer } from './incre-decre-reducer';
import mockupReducer from "./mockup"

const rootReducer = combineReducers({
    mockupReducer,
    apiReducer,
    IncreReducer
})
export default rootReducer;