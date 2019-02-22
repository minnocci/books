import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  loginUser,
  logoutUser,
  handleLoginUser,
  handleLogoutUser
} from '../actions/user'

import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/user'

import {
  meMock as user
} from '../utils/_DATA'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

  describe('async handleLoginUser', () => {

    it('should dispatch loginUser when handleLoginUser has been done', () => {
      const { user_id: userId, access_type: accessType } = user
      const expectedActions = [
        { type: LOGIN_USER, userId, accessType }
      ]
      const store = mockStore({})
      return store.dispatch(handleLoginUser()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

  })

  describe('async handleLogoutUser', () => {

    it('should dispatch logoutUser when handleLogoutUser has been done', () => {
      const { user_id: userId } = user
      const expectedActions = [
        { type: LOGOUT_USER, userId }
      ]
      const store = mockStore({})
      return store.dispatch(handleLogoutUser(userId)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

  })

})