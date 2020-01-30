import { combineReducers } from 'redux'

import MainLayout from './mainLayoutReducer'
import Login from './loginReducer'
import Home from './homeReducer'

const rootReducer = combineReducers({
  MainLayout,
  Login,
  Home
})

export default rootReducer
