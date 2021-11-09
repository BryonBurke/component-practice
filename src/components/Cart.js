import React from "react";
import PropTypes from "prop-types";


const Cart = (props) => {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenCartClicked(props.id)}>
        <h3>{props.cartName}</h3>
        <h3>{props.menu}</h3>
        <h3>{props.description}</h3>
      </div>

    </React.Fragment>
  );
}

Cart.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenCartClicked: PropTypes.func
};

export default Cart;