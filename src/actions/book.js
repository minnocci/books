import {
  getBooks
} from '../utils/api'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export const FILTER_BOOKS = 'FILTER_BOOKS'

export function receiveBooks ({ books }) {
  return {
    type: RECEIVE_BOOKS,
    books
  }
}

export function receiveBook (book) {
  return {
    type: RECEIVE_BOOK,
    book
  }
}

export function filterBooks (booksIds = []) {
  return {
    type: FILTER_BOOKS,
    booksIds
  }
}

// async action creator for receiveBooks
export function handleReceiveBooks () {
  return (dispatch) => {
    return getBooks()
      .catch ((error) => {
        console.warn('Error in handleReceiveBooks: ', error)
      })
      .then((books) => dispatch(receiveBooks(books)))
  }
}