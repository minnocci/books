import {
  loginUser,
  logoutUser
} from '../actions/user'

import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/user'

import {
  meMock as user
} from '../utils/_DATA'

describe('user actions', () => {

  it('should create an action to log in a user', () => {
    const { user_id: userId, access_type: accessType } = user
    const expectedAction = {
      type: LOGIN_USER,
      userId,
      accessType
    }
    expect(loginUser({ userId, accessType })).toEqual(expectedAction)
  })

  it('should create an action to log out a user', () => {
    const { user_id: userId } = user
    const expectedAction = {
      type: LOGOUT_USER,
      userId
    }
    expect(logoutUser(userId)).toEqual(expectedAction)
  })

})