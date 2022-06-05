import { useReducer, useState } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "add2":
      return state + action.value;
    case "decrement2":
      return state - action.value;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);
  return (
    <div>
      <p>Reducer</p>
      <div>
        <h2>firstCount is : {count}</h2>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>add</button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h2>secondCount is : {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add2", value: 1 })}>
          add2-1
        </button>
        <button onClick={() => dispatchTwo({ type: "add2", value: 5 })}>
          add2-5
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};
export default CounterOne;
