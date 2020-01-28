import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  user: '',
  isMenuVisible: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_USER:
      return { ...state, user: action.user }
    case ACTIONS_TYPES.SET_MENU_VISIBLE:
      return { ...state, isMenuVisible: action.isMenuVisible }
    default:
      return state
  }
}

export default MainLayout
