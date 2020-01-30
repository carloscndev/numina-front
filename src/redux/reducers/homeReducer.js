import * as ACTIONS_TYPES from '../actions/Home/actionsTypes'

export const initialState = {
  users: []
}

const Home = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_USERS:
      return { ...state, users: action.users }
    default:
      return state
  }
}

export default Home
