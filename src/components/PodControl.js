import React from 'react';
import NewCartForm from './NewCartForm';
import CartList from './CartList';
import CartDetail from './CartDetail'

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false,
      masterCartList: [],
      selectedCart: null
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

  handleChangingSelectedCart = (id) => {
    const selectedCart = this.state.masterCartList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedCart: selectedCart});
  }
   

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCart != null){
      currentlyVisibleState = 
        <CartDetail cart = {this.state.selectedCart} />
      buttonText = "Return to Cart Pod"
    }
    else if (this.state.formVisibleOnPage){
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