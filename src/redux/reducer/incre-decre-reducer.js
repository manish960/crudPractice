
import { constant } from "../Constant/constant";

const initialValues =0;

export const IncreReducer =(state=initialValues,action)=>{
    switch(action.type){
        case constant.INCREMENT :{
            return state+1;
        }
        case constant.DECREMENT :{
            return state-1;
        }
        default:return state;
    }
}