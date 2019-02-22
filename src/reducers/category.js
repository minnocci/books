import {
  RECEIVE_CATEGORIES,
  FILTER_CATEGORY
} from '../actions/category'

export default function category (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case FILTER_CATEGORY:
      return {
        ...state,
        activeCategoryId: action.category ? action.category.id : null
      }
    default:
      return state
  }
}