import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'

import Nav from './Nav'
import Categories from './Categories'

class Discovery extends Component {

  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <Categories />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10}>
              Books
            </Grid>
          </Grid>
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