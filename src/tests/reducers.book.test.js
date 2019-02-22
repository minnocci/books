import reducer from '../reducers/book'

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

describe('book reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle RECEIVE_BOOKS', () => {
    expect(
      reducer([], {
        type: RECEIVE_BOOKS,
        books
      })
    ).toEqual(
      {
        books
      }
    )
  })

  it('should handle RECEIVE_BOOK', () => {
    expect(
      reducer([], {
        type: RECEIVE_BOOK,
        book
      })
    ).toEqual(
      {
        books: [book]
      }
    )
  })

  it('should handle FILTER_BOOKS', () => {
    const booksIds = category.book_ids
    expect(
      reducer([], {
        type: FILTER_BOOKS,
        booksIds
      })
    ).toEqual(
      {
        filteredBooksIds: booksIds
      }
    )
  })

})