import formVisibleReducer from './form-visible-reducer';
import cartListReducer from './cart-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCartList: cartListReducer
});

export default rootReducer;