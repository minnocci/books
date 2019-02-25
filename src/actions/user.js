import {
  auth,
  logout
} from '../utils/api'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser ({ userId, accessType }) {
  return {
    type: LOGIN_USER,
    userId,
    accessType
  }
}

export function logoutUser (userId) {
  return {
    type: LOGOUT_USER,
    userId
  }
}

// async action creator for loginUser
export function handleLoginUser () {
  return (dispatch) => {
    return auth()
      .catch ((error) => {
        console.warn('Error in handleLoginUser: ', error)
      })
      .then((res) => {
        if (res !== undefined) {
          const { userId, accessType } = res
          !!userId
          && !!accessType
          && dispatch(loginUser({ userId, accessType }))
        }
      })
  }
}

// async action creator for logoutUser
export function handleLogoutUser (userId) {
  return (dispatch) => {
    return logout(userId)
      .catch ((error) => {
        console.warn('Error in handleLogoutUser: ', error)
      })
      .then((userId) => {
        dispatch(logoutUser(userId))
      })
  }
}