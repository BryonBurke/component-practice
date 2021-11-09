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
  backgroundColor: "orange",
  textAlign: "center",
  border: "solid",
  
  margin: "2px",
  borderRadius: "10%"
};



function CartList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.cartList).map((cart) =>
        <Cart
          whenCartClicked = { props.onCartSelection }
          cartName={cart.cartName}
          menu={cart.menu}
          description={cart.description}
          id={cart.id}
          key={cart.id}
        />
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.object,
  onCartSelection: PropTypes.func
};
 
export default CartList;