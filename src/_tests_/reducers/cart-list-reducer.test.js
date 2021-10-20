import cartListReducer from '../../reducers/cart-list-reducer';

describe('cartListReducer', () => {

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  let action;
  const cartData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(cartListReducer({}, { type: null })).toEqual({});
  });

  
  test('Should successfully add new cart data to mastercartList', () => {
    const { names, location, issue, id } = cartData;
    action = {
      type: 'ADD_CART',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(cartListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_CART',
      id: 1
    };
    expect(cartListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });



});

export default (state = {}, action) => {
  
  return state;
  
};