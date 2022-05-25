const initState = {
  loading: true,
  users: [],
  error: "",
};
const apiReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,

        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
