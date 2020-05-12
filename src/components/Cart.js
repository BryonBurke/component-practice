import React from "react";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenCartClicked(props.id)}>
        <h3>{props.name}</h3>    
     
      </div>

    </React.Fragment>
  );
}

export default Cart;