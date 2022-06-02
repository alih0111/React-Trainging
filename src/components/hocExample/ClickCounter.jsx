import { useState } from "react";

import WithCounter from "../hoc/WithCount";
const ClickCounter = ({ count, incrementCount, nameC }) => {
  return (
    <div>
      <h2 onClick={incrementCount}>
        clicked {count} times name: {nameC}
      </h2>
    </div>
  );
};
export default WithCounter(ClickCounter, 3);
