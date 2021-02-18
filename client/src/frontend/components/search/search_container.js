import { fetchSearchSuggestions } from '../../actions/search_term_actions'
import { connect } from 'react-redux'
import Search from './search'

const mapStateToProps = (state) => ({
  searchTerms: state.entities.searchTerms
})

const mapDispatchToProps = (dispatch) => ({
  fetchSearchSuggestions: (keyword) => dispatch(fetchSearchSuggestions(keyword))
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer