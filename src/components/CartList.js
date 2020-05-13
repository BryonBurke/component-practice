import React from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types'

const numItemsPerRow = 5;
const spaceBetweenItems = 20; // edit to increase/decrease space between items

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  margin: `-${spaceBetweenItems * 0.5}px`,
  border: "10px solid black",
  backgroundColor: "",
};

const itemStyle = {
  display: "block",
  flex: "none",
  width: `${100 / numItemsPerRow}%`,
  boxSizing: "border-box",
  padding: `${spaceBetweenItems * 0.5}px`,
  backgroundColor: "palevioletred",
  textAlign: "center",
  border: "10px solid blue",
};

const cardStyle = {
  backgroundColor: "palevioletred",
  height: "50px",
  textAlign: "center",
};

const CartList = (props) => {
  return (
    <div style={containerStyle}>
      {props.cartList.map((cart) => (
        <div style={itemStyle}>
          <Cart
            whenCartClicked = { props.onCartSelection }
            name={cart.name}
            menu={cart.menu}
            description={cart.description}
            id = {cart.id}
            key = {cart.id}
          />
        </div>
      ))}


       
   
    </div>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array,
  onCartSelection: PropTypes.func
};
 
export default CartList;