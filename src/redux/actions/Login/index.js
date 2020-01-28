import * as ACTIONS_TYPES from './actionsTypes'

export const setEmail = email => {
  return {
    type: ACTIONS_TYPES.SET_EMAIL,
    email
  }
}

export const setNickname = nickname => {
  return {
    type: ACTIONS_TYPES.SET_NICKNAME,
    nickname
  }
}

export const setErrorMail = error => {
  return {
    type: ACTIONS_TYPES.SET_ERROR_EMAIL,
    error
  }
}

export const setErrorNickname = error => {
  return {
    type: ACTIONS_TYPES.SET_ERROR_NICKNAME,
    error
  }
}
