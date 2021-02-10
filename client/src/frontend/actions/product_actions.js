import * as ProductApiUtil from '../util/product_api_util'
import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../constants/action_types'

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const fetchProducts = () => dispatch => 
  ProductApiUtil.fetchProducts().then(products => dispatch(receiveProducts(products.results)))