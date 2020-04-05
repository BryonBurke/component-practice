import React from "react";
import Cart from "./Cart";

const cartName = "Tito's Tacos"

function CartPod() {
  return (
    <React.Fragment>
      <Cart
        name={cartName}
        menu="menu goes here"
        cartpic="cart pic goes here" />
      <Cart
        name="Cart number 2"
        menu="menu cart number 2"
        cartpic="cart2 pic"
      />
    </React.Fragment>

  );
}

export default CartPod;