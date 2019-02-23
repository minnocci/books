import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import { handleLoginUser } from '../actions/user'
import Nav from './Nav'

export class Auth extends Component {

  state = {
    isLoading: false
  }

  handleLoginClick = (ev) => {
    ev.preventDefault()
    this.setState({ isLoading: true })
    const { dispatch } = this.props
    dispatch(handleLoginUser())
  }

  render() {

    const { isLoading } = this.state
    const { user } = this.props

    if (!!user && !!user.userId) {
      return <Redirect to='/discovery' />
    }

    return (
      <Fragment>
        <Nav />
        <main>
          <Button
            variant='contained'
            size='large'
            color='primary'
            className='btn btnLogin'
            disabled={(user && !!user.userId) || isLoading}
            onClick={(ev) => this.handleLoginClick(ev)}>
            Log in
          </Button>
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