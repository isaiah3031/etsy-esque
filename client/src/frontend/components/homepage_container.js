import { connect } from 'react-redux'
import { fetchProducts } from '../actions/product_actions'
import Homepage from './homepage'

const mapStateToProps = state => ({
  products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

export default HomepageContainer