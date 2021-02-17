import { get, patch, post } from './requests'

export const getPerfectBMW = () =>
  get(['carros', 'marcas', '7', 'modelos', '185', 'anos', '1996-1'], {
    removeTrailingSlash: true,
  })

export const doLogin = () =>
  post(['login'], {
    removeTrailingSlash: true,
  })

export const getUser = userId =>
  get(['600', 'users', userId], {
    removeTrailingSlash: true,
  })

export const updateUser = userId =>
  patch(['600', 'users', userId], {
    removeTrailingSlash: true,
  })
