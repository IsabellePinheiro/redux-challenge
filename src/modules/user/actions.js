import * as userService from '_services/user'
import { defineAction } from '_utils/redux'
import { keySelector } from '_modules/authentication/selectors'

export const GET_USER = defineAction('GET_USER')
export const UPDATE_USER = defineAction('UPDATE_USER')

export const getUser = () => (dispatch, getState) =>
  dispatch({
    type: GET_USER.ACTION,
    payload: userService.get(keySelector(getState())),
  })

export const updateUser = (payload, id) => (dispatch, getState) =>
  dispatch({
    type: UPDATE_USER.ACTION,
    payload: userService.update(keySelector(getState()), payload, id),
    meta: { id },
  })
