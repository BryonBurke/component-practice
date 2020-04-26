import React from "react";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenCartClicked(props.id)}>
        <h3>{props.name}</h3>
    
        <hr/>
        <hr/>
      </div>

    </React.Fragment>
  );
}

export default Cart;