import React from 'react';
import NewCartForm from './NewCartForm';
import CartList from './CartList';
import CartDetail from './CartDetail';
import EditCartForm from './EditCartForm';

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCartList: [{name: "titos", menu: "tacos"},2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0],
      selectedCart: null,
      editing: false,
      
    };
  }

  

  handleClick = () => {
    if (this.state.selectedCart != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCart: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewCartToList = (newCart) => {
    const newMasterCartList = this.state.masterCartList.concat(newCart);
    console.log(newMasterCartList);
    this.setState({ masterCartList: newMasterCartList });
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedCart = (id) => {
    const selectedCart = this.state.masterCartList.filter(
      (cart) => cart.id === id
    )[0];
    this.setState({ selectedCart: selectedCart });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingCartInList = (cartToEdit) => {
    const editedMasterCartList = this.state.masterCartList
      .filter((cart) => cart.id !== this.state.selectedCart.id)
      .concat(cartToEdit);

    console.log(editedMasterCartList);

    this.setState({
      masterCartList: editedMasterCartList,
      editing: false,
      handleChangingSelectedCart: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCartForm
          cart={this.state.selectedCart}
          onEditCart={this.handleEditingCartInList}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedCart != null) {
      currentlyVisibleState = (
        <CartDetail
          cart={this.state.selectedCart}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Cart Pod";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCartForm onNewCartCreation={this.handleAddingNewCartToList} />
      );
      buttonText = "Return to Cart Pod";
    } else {
      currentlyVisibleState = (
        <CartList
          cartList={this.state.masterCartList}
          onCartSelection={this.handleChangingSelectedCart}
        />
      );
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