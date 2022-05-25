import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/incre-decre-action";

const Updown = () => {
  const mystate = useSelector((state) => state);

  console.log(mystate,"stateredc")
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{mystate.IncreReducer}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Updown;
