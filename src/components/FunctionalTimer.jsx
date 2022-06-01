import { useEffect, useState } from "react";
const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("hi functional");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  }, []);
  return <div>Functional Interval</div>;
};
export default FunctionalTimer;
