import { constant } from "../Constant/constant";
import {getData1} from './../service'

export const fetchRequest = (pageNo : any): any => async (dispatch: any) => {
    dispatch({
      type: constant.FETCH_USER,
      payload: [],
    });
  
    try {
      const data = await getData1(pageNo);
  
      dispatch({
        type: constant.FETCH_USER_SUCCESS,
        payload: data,
      });
  
      console.log(data);
    } catch (err) {
      dispatch({
        type: constant.FETCH_ERROR,
        payload: { error: err },
      });
    }
  };
  