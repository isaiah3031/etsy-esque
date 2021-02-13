import { connect } from 'react-redux'
import { fetchProductsByKeyword } from '../actions/product_actions'
import Homepage from './homepage'
import { receiveCart } from '../actions/cart_actions'

const mapStateToProps = state => ({
  products: state.entities.products,
  cart: state.entities.cart,
  currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
  fetchProductsByKeyword: (keyword) => dispatch(fetchProductsByKeyword(keyword)),
  receiveCart: (userId, cart) => dispatch(receiveCart(userId, cart))
})

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

export default HomepageContainer