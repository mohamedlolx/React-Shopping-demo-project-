import React, { Component } from "react";

import Product from "./product";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("Shopping Cart ==> Constructor");
  }

  componentDidMount() {
    //Call Backend Server
    console.log("Shopping Cart ==> ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Shopping Cart ==> ComponentDidUpdate");
    console.log(prevProps);
  }

  render() {
    console.log("Shopping Cart ==> Render");
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
