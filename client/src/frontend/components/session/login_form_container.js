import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { receiveCart } from '../../actions/cart_actions'
import SessionForm from './session_form'

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'login',
  currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  receiveCart: userId => dispatch(receiveCart(userId, {}))
})

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)

export default LoginFormContainer;