import * as types from '../constants/action_types'

const stopAnimationAction = () => ({
  type: types.STOP_ANIMATIONS
})

export const stopAnimation = () => dispatch => 
  dispatch(stopAnimationAction())