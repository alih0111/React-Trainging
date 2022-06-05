import { useReducer, useState } from "react";

const initialstate = {
  firstCount: 0,
  secondCount: 4,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "add2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <p>Reducer</p>
      <h2>firstCount is : {count.firstCount}</h2>
      <h2>secondCount is : {count.secondCount}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>add</button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>                                       
          add2-1
        </button>
        <button onClick={() => dispatch({ type: "add2", value: 5 })}>
          add2-5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default CounterOne;
