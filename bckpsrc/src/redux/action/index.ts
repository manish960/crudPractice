// import axios from "axios"
import { constant } from "./../Constant/constant";
import { getData } from "./../service";

export const fetchRequest = (): any => async (dispatch: any) => {
  dispatch({
    type: constant.FETCH_USER,
    payload: [],
  });

  try {
    const data = await getData();

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
