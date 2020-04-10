import React from "react";

const Cart = (props) => {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.menu}</h3>
      <h3>{props.cartpic}</h3>
      <hr/>
      <hr/>

    </React.Fragment>
  );
}

export default Cart;