import React from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types'

const CartList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.cartList.map((cart) => (
        <Cart
          whenCartClicked = { props.onCartSelection }
          name={cart.name}
          menu={cart.menu}
          description={cart.description}
          id = {cart.id}
          key = {cart.id}
        />
      ))}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array,
  onTicketSelection: PropTypes.func
};
 
export default CartList;