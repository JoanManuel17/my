import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy} from "./store/counterSlice";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
    </div>
  );
}
