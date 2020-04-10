import React from 'react';
import NewPodForm from './NewPodForm';
import CartPod from './CartPod';

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false,
      masterCartList: []
     }
  }

 handleClick = () =>{
   this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
 }
   

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewPodForm 
      onNewPodCreation={this.handleAddingNewCartToPod}/>
      buttonText = "Return to Cart Pod";
    } else {
      currentlyVisibleState = <CartPod 
      cartPod={this.state.masterCartList}/>
      buttonText = "Add pod";
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