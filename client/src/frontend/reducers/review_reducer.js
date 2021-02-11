import * as types from '../constants/action_types'

const ReviewReducer = (state={}, action) => {
  switch (action.type) {
    case (types.RECEIVE_REVIEWS):
      const productId = action.reviews[0].ProductId
      return Object.assign({}, state, {[productId]: action.reviews})
    default:
      return state
  }
}

export default ReviewReducer