import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { theme } from '../utils/themes'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import { handleInitialData } from '../actions/shared'

import Auth from './Auth'
import Discovery from './Discovery'
import Book from './Book'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          { 
            this.props.loading === true
            ? <CircularProgress className='loader' color='primary' />
            : <Switch>
                <Route path='/'
                  exact component={Auth} />
                <Route path='/discovery'
                  exact component={Discovery} />
                <Route path='/book/:bookId'
                  exact component={Book} />
                <Redirect to='/' />
              </Switch>
          }
        </MuiThemeProvider>
      </Router>
    )

  }

}

function mapStateToProps ({ user }) {
  return {
    loading: !user,
    user
  }
}

export default connect(mapStateToProps)(App)