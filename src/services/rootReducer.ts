import { combineReducers } from 'redux';
import ingredientsReducer from './slices/ingredientsSlice';
import combinersReducer from './slices/combinersSlice';
import ordersReducer from './slices/ordersSlice';
import authReducer from './slices/authsSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  combiner: combinersReducer,
  orders: ordersReducer,
  auth: authReducer
});
