import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
  FILTER_BOOKS
} from '../actions/book'

export default function book (state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return {
        ...state,
        books: action.books
      }
    case RECEIVE_BOOK:
      return {
        ...state,
        books: [action.book]
      }
    case FILTER_BOOKS:
      return {
        ...state,
        filteredBooksIds: action.booksIds
      }
    default:
      return state
  }
}