import React from 'react';
import Cart from './Cart';
import cartpicture from './cart1.jpeg';

const masterCartList = [
  {
    name: "cart 1",
    menu: "menu 1",
    cartpic: <img src={cartpicture} height="100" width="100" alt="" />,
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

const CartList = () => {
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
 
export default CartList;