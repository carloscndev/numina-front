import * as ACTIONS_TYPES from './actionsTypes'

export const setEmail = email => {
  return {
    type: ACTIONS_TYPES.SET_EMAIL,
    email
  }
}

export const setNickname = Nickname => {
  return {
    type: ACTIONS_TYPES.SET_NICKNAME,
    Nickname
  }
}
