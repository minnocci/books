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