import * as ProductAPIUtil from '../util/product_api_util'
import * as types from '../constants/action_types'

const receiveSearchTerms = searchTerms => ({
  type: types.RECEIVE_SEARCH_TERMS,
  searchTerms
})

export const fetchSearchSuggestions = searchTerms => dispatch => 
  ProductAPIUtil.fetchSearchSuggestions(searchTerms).then((result) =>
    dispatch(receiveSearchTerms(result.suggestions))
  )