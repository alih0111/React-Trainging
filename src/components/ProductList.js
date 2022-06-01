import Product from "./Product/product";
import React, { Component } from "react";

class PorductList extends Component {
  // state = {
  //   products: [
  //     {
  //       title: "React.js",
  //       price: "99 $",
  //       id: 1,
  //       quantity: 5,
  //     },
  //     {
  //       title: "Node.js",
  //       price: "89 $",
  //       id: 2,
  //       quantity: 15,
  //     },
  //     {
  //       title: "JaveScript",
  //       price: "79 $",
  //       id: 3,
  //       quantity: 51,
  //     },
  //   ],
  // };

  renderProduct = () => {
    const { products, onRemove, onInc, onDec, onChange } = this.props;

    if (products.length === 0) return <div>there is no product in cart</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => onRemove(product.id)}
          onInc={() => onInc(product.id)}
          onDec={(e) => onDec(product.id)}
          onChange={(e) => onChange(e, product.id)}
        />
      );
    });
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {!products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default PorductList;
