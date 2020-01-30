import * as ACTIONS_TYPES from '../actions/Login/actionsTypes'

import {
  validateEmail,
  validateNickname
} from '../../utils'

import {
  setErrorMail,
  setErrorNickname
} from '../actions/Login'

export const inputsValidationMiddleware = store => next => action => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_EMAIL:
      next(setErrorMail(validateEmail(action.email)))
      break
    case ACTIONS_TYPES.SET_NICKNAME:
      next(setErrorNickname(validateNickname(action.nickname)))
      break
    default:
      return next(action)
  }
  return next(action)
}
