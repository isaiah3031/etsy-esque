import { fetchSearchSuggestions } from '../../actions/search_term_actions'
import { connect } from 'react-redux'
import Search from './search'
import { fetchProductsByKeyword } from '../../util/product_api_util'

const mapStateToProps = (state) => ({
  searchTerms: state.entities.searchTerms
})

const mapDispatchToProps = (dispatch) => ({
  fetchSearchSuggestions: (keyword) => dispatch(fetchSearchSuggestions(keyword)),
  fetchProductsByKeyword: (keyword) => dispatch(fetchProductsByKeyword(keyword))
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer