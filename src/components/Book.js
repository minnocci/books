import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Nav'

class Book extends Component {

  render() {

    return (
      <Fragment>
        <Nav />
        <main>
          Book page
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