import { defineAction } from '_utils/redux'
import * as authenticationService from '_services/authentication'

export const LOGIN = defineAction('LOGIN')
export const LOGOUT = defineAction('LOGOUT')

export const login = payload => ({
  type: LOGIN.ACTION,
  payload: authenticationService.login(payload),
})

export const logout = () => ({ type: LOGOUT.ACTION })
