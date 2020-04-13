import React from 'react';
import Cart from './Cart';


const masterCartList = [
  {
    name: "cart 1",
    menu: "menu 1",
    description: "mexican food",
  },
  {
    name: "cart 2",
    menu: "menu 2",
    description: 'thai comfort food',
  },
  {
    name: "cart 3",
    menu: "menu 3",
    description: "gyros",
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
          description={cart.description}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}
 
export default CartList;