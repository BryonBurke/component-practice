import React from 'react';
import NewCartForm from './NewCartForm';
import CartList from './CartList';

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

  handleAddingNewCartToList = (newCart) => {
    const newMasterCartList = this.state.masterCartList.concat(newCart);
    this.setState({ masterCartList: newMasterCartList });
    this.setState({ formVisibleOnPage: false });
  }
   

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = 
        <NewCartForm onNewCartCreation={this.handleAddingNewCartToList} />
      buttonText = "Return to Cart Pod";
    } else {
      currentlyVisibleState = 
      <CartList cartList={this.state.masterCartList}/>
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