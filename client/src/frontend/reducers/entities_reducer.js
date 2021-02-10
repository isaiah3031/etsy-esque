import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProductReducer from './product_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductReducer
})

export default entitiesReducer;