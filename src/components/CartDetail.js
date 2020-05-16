import React from 'react';
import PropTypes from "prop-types"
const CartDetail = (props) => {
  const { cart } = props;
  return (
    <React.Fragment>
      <h1>Cart Detail</h1>
      <h3>{cart.name}</h3>
      <div>

      <img src={cart.picture} />

      </div>
      <h3>{cart.menu}</h3>
      <h3>{cart.description}</h3>
      <hr />
      <button 
        onClick={props.onClickingEdit}>Update Cart
      </button>
    </React.Fragment>
  );
}
 
CartDetail.propTypes = {
  cart: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default CartDetail;

