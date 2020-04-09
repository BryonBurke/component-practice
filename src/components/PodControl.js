import React from 'react';
import NewPodForm from './NewPodForm';
import CartPod from './CartPod';

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false
     }
  }
  render() { 
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewPodForm/>
    } else {
      currentlyVisibleState = <CartPod/>
    }
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
     );
  }
}
 
export default PodControl;