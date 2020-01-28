import * as ACTIONS_TYPES from '../actions/Login/actionsTypes'

export const initialState = {
  email: '',
  nickname: '',
  isEmailValid: false,
  isNickNameValid: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_EMAIL:
      return { ...state, email: action.email }
    case ACTIONS_TYPES.SET_NICKNAME:
      return { ...state, nickname: action.nickname }
    case ACTIONS_TYPES.SET_ERROR_EMAIL:
      return { ...state, isEmailValid: action.error }
    case ACTIONS_TYPES.SET_ERROR_NICKNAME:
      return { ...state, isNickNameValid: action.error }
    default:
      return state
  }
}

export default MainLayout
