import * as types from '../constants/action_types'

const SearchTermReducer = (state={}, action) => {
  switch (action.type) {
    case types.RECEIVE_SEARCH_TERMS:
      return action.searchTerms
    default:
      return state
  }
}

export default SearchTermReducer