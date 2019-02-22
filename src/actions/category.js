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