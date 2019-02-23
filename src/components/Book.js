import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { handleReceiveBook } from '../actions/book'
import { handleLoginUser } from '../actions/user'
import Nav from './Nav'

export class Book extends Component {

  state = {
    bookEl: null,
    isLoading: false
  }

  componentDidMount() {
    const { book, dispatch, match } = this.props
    const bookId = match.params.bookId
    if (!!book && !!book.books) {
      // coming from discovery
      const bookEl = book.books.find(x => x.id === bookId)
      this.setState({ bookEl })
    } else {
      // coming from direct url or refresh
      dispatch(handleReceiveBook({ bookId }))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { book } = nextProps
    const { bookEl } = this.state
    if (!bookEl && !!book.books) {
      // coming from direct url or refresh
      const bookElem = book.books[0]
      this.setState({ bookEl: bookElem })
    }
  }

  handleLoginClick = (ev) => {
    ev.preventDefault()
    this.setState({ isLoading: true })
    const { dispatch } = this.props
    dispatch(handleLoginUser())
  }

  render() {

    const { bookEl, isLoading } = this.state
    const { user } = this.props

    const book = bookEl && (
      <Fragment>
        <Typography
          variant='h4'
          gutterBottom={true}
          className='bookTitle'>
          {bookEl.title}
        </Typography>
        <Typography
          paragraph={true}
          align='left'
          className='bookContent'>
          {
            !!user && !!user.userId
            ? bookEl.content
            : `${bookEl.content.slice(0, bookEl.content.length / 2)}...`
          }
        </Typography>
        { 
          !(!!user && !!user.userId) &&
          <Button
            variant='contained'
            size='large'
            color='primary'
            className='btn btnSubscribe'
            disabled={(user && !!user.userId) || isLoading}
            onClick={(ev) => this.handleLoginClick(ev)}>
            Subscribe to read
          </Button>
        }
      </Fragment>
    )

    return (
      <Fragment>
        <Nav />
        <main>
          { 
            !bookEl
            ? <CircularProgress className='loader' color='primary' />
            : book
          }
        </main>
      </Fragment>
    )

  }
}

function mapStateToProps ({ user, book }) {
  return {
    user,
    book
  }
}

export default withRouter(connect(mapStateToProps)(Book))