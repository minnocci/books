import reducer from '../reducers/user'

import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/user'

import {
  meMock as user
} from '../utils/_DATA'

describe('user reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle LOGIN_USER', () => {
    expect(
      reducer([], {
        type: LOGIN_USER,
        userId: user.user_id,
        accessType: user.access_type
      })
    ).toEqual(
      {
        userId: user.user_id,
        accessType: user.access_type
      }
    )
  })

  it('should handle LOGOUT_USER', () => {
    expect(
      reducer([], {
        type: LOGOUT_USER,
        userId: user.user_id
      })
    ).toEqual({})
  })

})