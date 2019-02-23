import {
  getCategories
} from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'

export function receiveCategories ({ categories }) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function filterCategory (category = null) {
  return {
    type: FILTER_CATEGORY,
    category
  }
}

// async action creator for receiveCategories
export function handleReceiveCategories () {
  return (dispatch) => {
    return getCategories()
      .catch ((error) => {
        console.warn('Error in handleReceiveCategories: ', error)
      })
      .then((categories) => dispatch(receiveCategories(categories)))
  }
}