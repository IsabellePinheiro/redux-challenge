import { get as getRequest, patch } from './requests'

export const get = key => getRequest(['users'], { key, transformPayload: true })

export const getById = (key, id) => getRequest(['users', id], { key, transformPayload: true })

export const update = (key, payload, id) =>
  patch(['users', id], { key, transformPayload: true }, payload)
