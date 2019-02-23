import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

import { handleLogoutUser } from '../actions/user'

export class Nav extends Component {

  state = {
    shallRedirect: false
  }

  handleLogoutClick = (ev) => {
    ev.preventDefault()
    const { dispatch } = this.props
    Promise.resolve(
      dispatch(handleLogoutUser())
    ).then(() => (
      this.setState({ shallRedirect: true })
    ))
  }

  render() {

    const { user } = this.props
    const { shallRedirect } = this.state

    if (shallRedirect) {
      return <Redirect to='/' />
    }

    return(
      <AppBar
        position='static'
        color='secondary'
        className='appbar'>
        <Toolbar>
          <Link to='/'>
            <img
              src='//static.blinkist.com/documents/Press_Page_New/Logo_V2/Blinkist-Logo.png'
              className='logo'
              alt='Blinkist'
            />
          </Link>
          <span className='flexGrow'/>
          {
            user && user.userId
            ? <Fragment>
                <Tooltip
                  TransitionComponent={Zoom}
                  title={`Logout ${user.accessType} user`}
                  placement='left'>
                  <Button
                    variant='outlined'
                    size='small'
                    className='btn btnLogout'
                    onClick={(ev) => this.handleLogoutClick(ev)}>
                    Log out
                  </Button>
                </Tooltip>
              </Fragment>
            : null
          }
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

export default withRouter(connect(mapStateToProps)(Nav))