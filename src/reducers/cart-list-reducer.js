export default (state = {}, action) => {
    const { cartName, menu, description, id } = action;
    switch (action.type) {
    case 'ADD_CART':
      return Object.assign({}, state, {
        [id]: {
          cartName: cartName,
          menu: menu,
          description: description,
          id: id
        }
      });
    
    case 'DELETE_CART':
        let newState = { ...state };
        delete newState[id];
        return newState;

    default:
      return state;
    }
  };