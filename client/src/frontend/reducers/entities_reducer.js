import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProductReducer from './product_reducer'
import ReviewReducer from './review_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductReducer,
  reviews: ReviewReducer
})

export default entitiesReducer;