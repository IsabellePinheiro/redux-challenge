import { Map } from 'immutable'

import { UPDATE_USER, GET_USER } from './actions'

export const loadingUser = ({ loading }) => loading.get(GET_USER.ACTION)
export const loadingUpdateUser = ({ loading }) => loading.get(UPDATE_USER.ACTION)

export const getUserSelector = ({ user }) => user?.get('users', Map())
