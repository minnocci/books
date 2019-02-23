import { getInitialData } from '../utils/api'
import { handleLoginUser } from './user'

// async action creator for initial data
export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then((session) => {
      if (session) dispatch(handleLoginUser())
    })
  }
}