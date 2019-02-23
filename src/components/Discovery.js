import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Nav'

class Discovery extends Component {

  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          Discovery
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

export default withRouter(connect(mapStateToProps)(Discovery))