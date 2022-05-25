import { constant } from "../Constant/constant"

export  const increment = ()=>async dispatch=>{
    
    dispatch({
        type:constant.INCREMENT
    })
 
}


export const decrement=()=>async dispatch=>{
    dispatch({
        type:constant.DECREMENT
    })
}