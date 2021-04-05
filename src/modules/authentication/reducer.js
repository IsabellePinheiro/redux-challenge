import cookies from 'react-cookies'

import { createReducer } from '_utils/redux'
import User from '_models/user'

import { LOGIN, LOGOUT } from './actions'

const userStringified = cookies.load('accessToken')
const INITIAL_STATE = {
  accessToken: userStringified || new User(),
  // key: undefined,
}

export default createReducer(INITIAL_STATE, {
  [LOGIN.FULFILLED]: (state, { payload }) => {
    const { accessToken } = payload
    cookies.save(`accessToken`, accessToken, { path: '/login' })
    return { accessToken }
  },

  [LOGOUT]: () => {
    cookies.remove('accessToken', { path: '/login' })
    cookies.remove('user', { path: '/login' })
    return { accessToken: null }
  },
})

// export default login
