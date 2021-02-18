import * as types from '../constants/action_types'
import * as ProductApiUtil from '../util/product_api_util'

const receiveReviews = reviews => ({
  type: types.RECEIVE_REVIEWS,
  reviews
})

export const fetchReviews = productId => dispatch => 
  ProductApiUtil.fetchReviews(productId).then(({result}) => {
    return dispatch(receiveReviews(result))
  })