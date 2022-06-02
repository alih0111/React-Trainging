import { useState } from "react";
import WithCounter from "../hoc/WithCount";
const HoveredCounter = ({ count, incrementCount, nameH }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>
        hovered {count} times {nameH}
      </h2>
    </div>
  );
};
export default WithCounter(HoveredCounter, 4);
