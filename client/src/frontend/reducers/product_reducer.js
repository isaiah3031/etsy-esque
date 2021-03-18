import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../constants/action_types'

const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      let productObject = {}
      action.products.map(product => productObject[product.tcin] = product)
      return productObject;
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.tcin]: action.product })
    default:
      return state;
  }
}

export default ProductReducer