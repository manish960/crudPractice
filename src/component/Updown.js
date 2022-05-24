import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/incre-decre-action";

const Updown = () => {
  const mystate = useSelector((state) => state.IncreReducer);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{mystate}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Updown;
