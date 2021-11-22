import React from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types'



const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  //margin: `-${spaceBetweenItems * 0.5}px`,
};





function CartList(props){
  return (
    <div style={containerStyle}>

      {Object.values(props.cartList) .map((cart)  =>  
           
        <Cart 
          whenCartClicked = {props.onCartSelection}
          cartName={cart.cartName}
          id={cart.id}         
        />

      )}

    </div>
  );
}

CartList.propTypes = {
  cartList: PropTypes.object,
  onCartSelection: PropTypes.func
};
 
export default CartList;