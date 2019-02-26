import {
  getInitialData,
  getCategory
} from '../utils/api'

import { handleLoginUser } from './user'
import { filterCategory } from './category'
import { filterBooks } from './book'

// async action creator for initial data
export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then((session) => {
      !!session && dispatch(handleLoginUser())
    })
  }
}

// async action creator for handleFilterCategory
export function handleFilterCategory ({ categoryId }) {
  return (dispatch) => {
    return getCategory({ id: categoryId })
      .catch ((error) => {
        console.warn('Error in handleFilterCategory: ', error)
      })
      .then((category) => {
        !!category && dispatch(filterCategory(category))
        !!category && dispatch(filterBooks(category.book_ids))
      })
  }
}

// action creator for resetting filters
export function handleResetFilters () {
  return (dispatch) => {
    dispatch(filterCategory())
    dispatch(filterBooks())
  }
}