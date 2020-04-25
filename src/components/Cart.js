import React from "react";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenCartClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.menu}</h3>
        <h3>{props.description}</h3>     
        <hr/>
        <hr/>
      </div>

    </React.Fragment>
  );
}

export default Cart;