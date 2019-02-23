import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { handleReceiveBooks } from '../actions/book'
import BookItem from './BookItem'

export class Books extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveBooks())
  }

  render() {

    const { books, filteredBooksIds } = this.props.book
    const isFiltered = filteredBooksIds && filteredBooksIds.length > 0
    const booksResult = isFiltered
      ? books.filter((book) => filteredBooksIds.includes(book.id))
      : books

    return (
      <Grid
        container
        spacing={24}
        className='booksGrid'>
        {booksResult && Object.keys(booksResult).map((key) => {
          return (
            <Grid key={`book-${key}`}
              item xs={12} sm={6} md={4} lg={3}
              className='booksGridItem'>
              <BookItem book={booksResult[key]} />
            </Grid>
          )
        })}
      </Grid>
    )

  }
}

function mapStateToProps ({ book }) {
  return {
    book
  }
}

export default connect(mapStateToProps)(Books)