import React from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types'



const CartList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.cartList.map((cart, index) => (
        <Cart
          name={cart.name}
          menu={cart.menu}
          description={cart.description}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array
};
 
export default CartList;