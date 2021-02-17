import { createReducer } from '_utils/redux'
import { Login } from '_models'

import { GET_PERFECT_BMW } from './actions'

const INITIAL_STATE = new Login()

const login = createReducer(INITIAL_STATE, {
  [GET_PERFECT_BMW.FULFILLED]: (state, { payload }) => new Login(payload),
})

export default login
