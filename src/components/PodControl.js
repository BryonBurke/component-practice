import React from 'react';
import NewCartForm from './NewCartForm';
import CartPod from './CartPod';

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false
     }
  }

 handleClick = () =>{
   this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
 }
   

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCartForm/>
      buttonText = "Return to Cart Pod";
    } else {
      currentlyVisibleState = <CartPod/>
      buttonText = "Add cart";
    }
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
     );
  }
}
 
export default PodControl;