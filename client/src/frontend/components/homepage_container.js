import { connect } from 'react-redux'
import { fetchProductsByKeyword } from '../actions/product_actions'
import Homepage from './homepage'

const mapStateToProps = state => ({
  products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
  fetchProductsByKeyword: (keyword) => dispatch(fetchProductsByKeyword(keyword))
})

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

export default HomepageContainer