import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/user'

export default function user (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        'userId': action.userId,
        'accessType': action.accessType
      }
    case LOGOUT_USER:
      return {
        ...state = undefined
      }
    default:
      return state
  }
}