import { Map, List } from 'immutable'
import cookies from 'react-cookies'

import User from '_models/user'
import { createReducer } from '_utils/redux'

import { GET_USER, UPDATE_USER } from './actions'

const INITIAL_STATE = Map({
  loading: List(),
  user: Map(),
})

const getInitialState = () => {
  const loggedUserStringified = cookies.load('user')

  if (!loggedUserStringified) {
    return INITIAL_STATE
  }

  const loggedUser = new User(loggedUserStringified)
  return INITIAL_STATE.setIn(['user', loggedUser.id], loggedUser)
}

export default createReducer(getInitialState(), {
  [GET_USER.FULFILLED]: (state, { payload }) => {
    const user = new User(payload?.[0])
    cookies.save('user', payload, { path: '/' })
    return state.setIn(['users'], user)
  },
  [UPDATE_USER.FULFILLED]: (state, { payload }) => {
    const user = new User(payload)
    cookies.save('user', payload, { path: '/' })
    return state.setIn(['users'], user)
  },
})
