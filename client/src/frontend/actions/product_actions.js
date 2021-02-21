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

export const fetchProductsByKeyword = (keyword) => dispatch => 
  ProductApiUtil.fetchProductsByKeyword(keyword).then(result => 
    dispatch(receiveProducts(result.products)))

export const fetchProduct = (productId) => dispatch =>
  ProductApiUtil.fetchProduct(productId).then(result =>{
    let product = result.product || result.data.product
    return dispatch(receiveProduct(product))
  })
