import { combineReducers } from 'redux'

import authentication from './authentication/reducer'
import error from './error/reducer'
import loading from './loading/reducer'
import user from './user/reducer'

const rootReducer = combineReducers({
  error,
  loading,
  authentication,
  user,
})

export default rootReducer
