import React from 'react';
import Cart from './Cart';
import cartpicture from './cart1.jpeg';

const masterCartList = [
  {
    name: "cart 1",
    menu: "menu 1",
    cartpic: <img src={cartpicture} height="42" width="42" alt="a picture" />,
  },
  {
    name: "cart 2",
    menu: "menu 2",
    cartpic: "cartpic 2",
  },
  {
    name: "cart 3",
    menu: "menu 3",
    cartpic: "cartpic 3",
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