import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";
class ParentCom extends Component {
  state = {
    name: "ali",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "ali" });
    }, 1000);
  }
  render() {
    console.log("parent comp------");
    return (
      <div>
        parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name}/>
      </div>
    );
  }
}
export default ParentCom;
