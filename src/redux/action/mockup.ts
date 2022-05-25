import axios from "axios";

const fetchMockup = () => async (dispatch:any) => {
  dispatch({
    type: "FETCH_MCKUP",
    payload: [],
  });
  try {
    let { data } = await axios.get(
      "https://628c70a1a3fd714fd0321222.mockapi.io/users"
    );
    dispatch({
      type: "MCKUP_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "MCKUP_FAILED",
      payload: [],
    });
  }
};

const deltemockup = (id:number) => async (dispatch:any) => {
  dispatch({
    type: "DELETING_MCKUP",
    payload: [],
  });
  try {
    let { data } = await axios.delete(
      `https://628c70a1a3fd714fd0321222.mockapi.io/users/${id}`
    );
    let { data: updatedData } = await axios.get(
      "https://628c70a1a3fd714fd0321222.mockapi.io/users"
    );

    dispatch({
      type: "DELETED_MCKUP_SUCESS",
      payload: [...updatedData],
    });
  } catch (err) {
    dispatch({
      type: "DELETED_MCKUP_FAILED",
      payload: [],
    });
  }
};

const updateMockup = (id:number, name:string) => async (dispatch:any) => {
  dispatch({
    type: "UPDATING_MCKUP",
    payload: [],
  });
  try {
    let data = await axios.put(
      `https://628c70a1a3fd714fd0321222.mockapi.io/users/${id}`,
      { name }
    );
    let { data: updatedData } = await axios.get(
      "https://628c70a1a3fd714fd0321222.mockapi.io/users"
    );
    dispatch({
      type: "UPDATE_MCKUP_SUCESS",
      payload: [...updatedData],
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_MCKUP_FAILED",
      payload: [],
    });
  }
};

const createMockup = (name:number) => async (dispatch:any) => {
  dispatch({
    type: "CREATING_MCKUP",
    payload: [],
  });
  try {
    let data = await axios.post(
      `https://628c70a1a3fd714fd0321222.mockapi.io/users`,
      { name }
    );
    let { data: updatedData } = await axios.get(
      "https://628c70a1a3fd714fd0321222.mockapi.io/users"
    );
    dispatch({
      type: "CREATING_MCKUP_SUCESS",
      payload: [...updatedData],
    });
  } catch (err) {
    dispatch({
      type: "CREATING_MCKUP_FAILED",
      payload: [],
    });
  }
};

const ReduxAction = {
  fetchMockup,
  deltemockup,
  updateMockup,
  createMockup,
};

export default ReduxAction;
