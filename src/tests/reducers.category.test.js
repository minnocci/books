import reducer from '../reducers/category'

import {
  RECEIVE_CATEGORIES,
  FILTER_CATEGORY
} from '../actions/category'

import {
  categoryMock as category,
  categoriesMock as categories
} from '../utils/_DATA'

describe('category reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle RECEIVE_CATEGORIES', () => {
    expect(
      reducer([], {
        type: RECEIVE_CATEGORIES,
        categories
      })
    ).toEqual(
      {
        categories
      }
    )
  })

  it('should handle FILTER_CATEGORY', () => {
    expect(
      reducer([], {
        type: FILTER_CATEGORY,
        category
      })
    ).toEqual(
      {
        activeCategoryId: category.id
      }
    )
  })

})