import { combineReducers } from 'redux'

import MainLayout from './mainLayoutReducer'
import Login from './loginReducer'

const rootReducer = combineReducers({
  MainLayout,
  Login
})

export default rootReducer
