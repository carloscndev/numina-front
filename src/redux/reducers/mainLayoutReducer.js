import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  user: window.sessionStorage.getItem('user') || '',
  isMenuVisible: false,
  isModalVisible: false,
  isLoading: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_USER:
      return { ...state, user: action.user }
    case ACTIONS_TYPES.SET_MENU_VISIBLE:
      return { ...state, isMenuVisible: action.isMenuVisible }
    case ACTIONS_TYPES.SET_MODAL_VISIBLE:
      return { ...state, isModalVisible: action.isModalVisible }
    case ACTIONS_TYPES.SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default MainLayout
