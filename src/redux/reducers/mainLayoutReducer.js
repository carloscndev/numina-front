import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  user: ''
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_USER:
      return { ...state, user: action.user }
    default:
      return state
  }
}

export default MainLayout
