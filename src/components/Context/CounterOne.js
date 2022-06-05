import { useCount, useCountAction } from "./CounterProvider";
const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive, decrement } = useCountAction();
  return (
    <div>
      <h2> count is: {count} </h2>
      <button onClick={addOne}>add one </button>
      <button onClick={addFive}>add five </button>
      <button onClick={decrement}>dec one </button>
    </div>
  );
};
export default CounterOne;
