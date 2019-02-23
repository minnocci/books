import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Nav'

class Auth extends Component {

  render() {

    return (
      <Fragment>
        <Nav />
        <main>
          Auth
        </main>
      </Fragment>
    )

  }

}

function mapStateToProps ({ user }) {
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(Auth))