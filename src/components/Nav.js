import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class Nav extends Component {

  render() {

    return(
      <AppBar
        position='static'
        color='secondary'
        className='appbar'>
        <Toolbar>
          Nav
        </Toolbar>
      </AppBar>
    )

  }
}

function mapStateToProps ({ user }) {
  return {
    user
  }
}

export default connect(mapStateToProps)(Nav)