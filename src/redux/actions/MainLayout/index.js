import * as ACTIONS_TYPES from './actionsTypes'

export const setUser = user => {
  return {
    type: ACTIONS_TYPES.SET_USER,
    user
  }
}
