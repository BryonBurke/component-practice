import React from 'react';
import Cart from './Cart';

const masterCartList = [
  {
    name: 'cart 1',
    menu: 'menu 1',
    cartpic: img src=../images/'cart1.jpeg' alt='a picture'
  },
  {
    name: 'cart 2',
    menu: 'menu 2',
    cartpic: 'cartpic 2'
  },
  {
    name: 'cart 3',
    menu: 'menu 3',
    cartpic: 'cartpic 3'
  },

];

const CartPod = () => {
  return (
    <React.Fragment>
      <hr />
      {masterCartList.map((cart, index) => (
        <Cart
          name={cart.name}
          menu={cart.menu}
          cartpic={cart.cartpic}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}
 
export default CartPod;