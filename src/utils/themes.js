import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00e676',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#eceff1',
      contrastText: '#042330'
    }
  },
  typography: {
    useNextVariants: true
  }
})