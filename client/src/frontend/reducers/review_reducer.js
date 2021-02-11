import * as types from '../constants/action_types'

const ReviewReducer = (state={}, action) => {
  switch (action.type) {
    case (types.RECEIVE_REVIEWS):
      return Object.assign({}, state, action.reviews)
    default:
      return state
  }
}

export default ReviewReducer