import * as types from '../../frontend/constants/action_types.js'
import {combineReducers} from 'redux'
import CartAnimationReducer from './cart_animation_reducer'

const uiReducer = combineReducers({
  cartAnimation: CartAnimationReducer
})

export default uiReducer