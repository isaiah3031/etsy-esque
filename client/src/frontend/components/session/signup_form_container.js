import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form'
import { receiveCart } from '../../actions/cart_actions'

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'signup',
  currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  receiveCart: userId => dispatch(receiveCart(userId, {}))
})

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)

export default SignupFormContainer;