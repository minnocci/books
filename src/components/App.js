import React, { Component } from 'react'
import { connect } from 'react-redux'

import { theme } from '../utils/themes'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        { 
          this.props.loading === true
          ? <div>Loading</div>
          : <div>Loaded</div>
        }
      </MuiThemeProvider>
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