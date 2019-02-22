import {
  filterBooks,
  receiveBook,
  receiveBooks
} from '../actions/book'

import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK,
  FILTER_BOOKS
} from '../actions/book'

import {
  booksMock as books,
  bookMock as book,
  categoryMock as category
} from '../utils/_DATA'

describe('book actions', () => {

  it('should create an action to receive the books collection', () => {
    const expectedAction = {
      type: RECEIVE_BOOKS,
      books
    }
    expect(receiveBooks({ books })).toEqual(expectedAction)
  })

  it('should create an action to receive a book', () => {
    const expectedAction = {
      type: RECEIVE_BOOK,
      book
    }
    expect(receiveBook(book)).toEqual(expectedAction)
  })

  it('should create an action to set the books filter', () => {
    const booksIds = category.book_ids
    const expectedAction = {
      type: FILTER_BOOKS,
      booksIds
    }
    expect(filterBooks(booksIds)).toEqual(expectedAction)
  })

})