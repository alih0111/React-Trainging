// import Product from "./components/Product/product";
// import Counter from "./components/Product/HookCounter";
// import CCounter from "./components/Product/ClassCounter";
// import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import ProductList from "./components/ProductList";
import { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassTimer from "./components/ClassTimer";
import FunctionalTimer from "./components/FunctionalTimer";
import Wrapper from "./components/hoc/Wrapper";
import ClickCounter from "./components/hocExample/ClickCounter";
import HOverCounter from "./components/hocExample/HoverCounter";
import WithCount from "./components/hoc/WithCount";
import ParentCom from "./components/PureMemoComp/ParentComp";

// const App = () => {
//   // const [number, setnumber] = useState(0);

//   // const clickHandler = () => {
//   //   setnumber(number+1);
//   // };

//   return <ProductList />;
// };

class App extends Component {
  state = {
    products: [
      {
        title: "React.js",
        price: "99 $",
        id: 1,
        quantity: 5,
      },
      {
        title: "Node.js",
        price: "89 $",
        id: 2,
        quantity: 15,
      },
      {
        title: "JaveScript",
        price: "79 $",
        id: 3,
        quantity: 51,
      },
    ],
    isShow: true,
  };
  removeHandler = (id) => {
    const filtredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filtredProducts });
  };
  IncHandler = (id) => {
    // const productss = [...this.state.products];
    // const selectedItem = productss.find((p) => p.id === id);
    // selectedItem.quantity++;
    // this.setState({ products: productss });
    // 1.index
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);
    // 2. clone the selected index and update qty
    const product = { ...this.state.products[index] };
    product.quantity++;
    // 3. update product
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };
  decHandler = (id) => {
    // const productss = [...this.state.products];
    // const selectedItem = productss.find((p) => p.id === id);
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      this.removeHandler(id);
    } else {
      product.quantity--;
      const products = [...this.state.products];
      products[index] = product;
      this.setState({ products });
    }
  };
  changeHandler = (event, id) => {
    // const productss = [...this.state.products];
    // const selectedItem = productss.find((p) => p.id === id);
    // selectedItem.title = event.target.value;
    // this.setState({ products: productss });
    const index = this.state.products.findIndex((item) => item.id === id);
    // 2. clone the selected index and update qty
    const product = { ...this.state.products[index] };
    product.title = event.target.value;
    // 3. update product
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log("App.js", prevState);
  }

  render() {
    return (
      <>
        {/* <button
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          {this.state.isShow ? "hide" : "show"}
        </button> */}
        {/* {this.state.isShow && <ClassTimer/>} */}
        {/* {this.state.isShow && <FunctionalTimer />} */}
        {/* <ClassCounter/> */}
        {/* <FunctionalCounter/> */}
        {/* <Navbar
          totalItem={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onInc={this.IncHandler}
          onDec={this.decHandler}
          onChange={this.changeHandler}
        /> */}
        {/* <ClickCounter nameC="Ali-Clicked"/>
        <HOverCounter nameH="Ali-Hovered"/> */}
        <ParentCom/>
      </>
    );
  }
}
export default Wrapper(App,'container');
export const userName = "ali";
export const appName = "react";
