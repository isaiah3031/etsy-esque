import { connect } from 'react-redux'
import { fetchProductsByKeyword } from '../../actions/product_actions'
import SearchResults from './search_results'

const mapStateToProps = state => ({
  results: state.entities.products
})

const mapDispatchToProps = dispatch => ({
  fetchProductsByKeyword: searchTerms => dispatch(fetchProductsByKeyword(searchTerms))
})

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

export default SearchResultsContainer

