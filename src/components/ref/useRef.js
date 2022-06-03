import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");

  const [count, setCount] = useState(0);
  const previousCount = useRef();
  useEffect(() => {
    previousCount.current = count;
  }, [count]);
  const previousValue = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <button
        onClick={() => {
          setCount(Math.ceil(Math.random() * 100));
        }}
      >
        generate random
      </button>
      <div>count is : {count}</div>
      <div>previous count is {previousCount.current}</div>
    </div>
  );
};

export default UseRefExample;
