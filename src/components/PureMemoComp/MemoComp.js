import React from "react";
const MemoComp = (props) => {
  console.log("memo comp");
  return <div>memo comps - {props.name}</div>;
};
export default React.memo(MemoComp);

