import React from 'react';
import NewCartForm from './NewCartForm';
import CartList from './CartList';
import CartDetail from './CartDetail';
import EditCartForm from './EditCartForm';
import { connect } from 'react-redux';

class PodControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const { name, picture, menu, id } = newCart;
    const action = {
      type: 'ADD_CART',
      name: name,
      picture: picture,
      menu: menu,
      id: id,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedCart = (id) => {
    const selectedCart = this.props.masterCartList[id];
    this.setState({selectedCart: selectedCart});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingCartInList = (cartToEdit) => {
    const editedMasterCartList = this.state.masterCartList
      .filter(cart => cart.id !== this.state.selectedCart.id)
      .concat(cartToEdit);
    this.setState({
        masterCartList: editedMasterCartList,
        editing: false,
        selectedCart: null
      });
  }

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
      buttonText = "Return to Cart List";
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
          cartList={this.props.masterCartList}
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

PodControl = connect()(PodControl);

const mapStateToProps = state => {
  return {
    masterCartList: state
  }
}

// Note: we are now passing mapStateToProps into the connect() function.

PodControl = connect(mapStateToProps)(PodControl);
 
export default PodControl;