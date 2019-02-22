import {
  receiveCategories,
  filterCategory
} from '../actions/category'

import {
  RECEIVE_CATEGORIES,
  FILTER_CATEGORY
} from '../actions/category'

import {
  categoryMock as category,
  categoriesMock as categories
} from '../utils/_DATA'

describe('category actions', () => {

  it('should create an action to receive the categories collection', () => {
    const expectedAction = {
      type: RECEIVE_CATEGORIES,
      categories
    }
    expect(receiveCategories({ categories })).toEqual(expectedAction)
  })

  it('should create an action to filter a category', () => {
    const expectedAction = {
      type: FILTER_CATEGORY,
      category
    }
    expect(filterCategory(category)).toEqual(expectedAction)
  })

})