import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/features/CounterSlice";

const Counter = () => {


    const { valaue } = useSelector(state => state.Counter.value)

    const dispatch = useDispatch()

  return (
    <div>
      <h3> COUNTER </h3>
      <p>Counter is = {valaue}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
     
    </div>
  );
};

export default Counter;
