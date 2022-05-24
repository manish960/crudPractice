import { constant } from "../Constant/constant"

export  const increment = ()=>{
    return {
        type:constant.INCREMENT
    }
}
export const decrement=()=>{
    return {
        type:constant.DECREMENT
    }
}