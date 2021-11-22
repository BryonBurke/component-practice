import React from "react";
import PropTypes from "prop-types";

const numItemsPerRow = 5;
const spaceBetweenItems = 20; // edit to increase/decrease space between items


const itemStyle = {
  display: "block",
  flex: "none",
  width: `${100 / numItemsPerRow}%`,
  boxSizing: "border-box",
  padding: `${spaceBetweenItems * 0.5}px`,
  backgroundColor: "orange",
  textAlign: "center",
  border: "solid",
  margin: "2px",
};


const Cart = (props) => {
  return (
    <div style={itemStyle}>
      <div onClick ={() => props.whenCartClicked(props.id)}>
        <h3>{props.cartName}</h3>
        <h3>{props.menu}</h3>
        <h3>{props.description}</h3>
      </div>

    </div>
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