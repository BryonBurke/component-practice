import React from "react";
import Header from "./Header";
import cart1 from ./images/cart1

function App(){
  const name = "This cart name";
  const type = "This cart food type";
  const pic = "This cart picture";
  return (
    <React.Fragment>
      <Header/>
      <h3>{name}</h3>
      <h3>{type}</h3>
      <img src={cart1} alt="Logo" />
    <hr/>
    </React.Fragment>
  );
}



export default App;
