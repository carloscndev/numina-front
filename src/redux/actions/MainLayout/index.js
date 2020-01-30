
import * as ACTIONS_TYPES from './actionsTypes'
import { USER } from '../../../constants/user'

export const setUser = user => {
  return {
    type: ACTIONS_TYPES.SET_USER,
    user
  }
}

export const setMenuVisible = isMenuVisible => {
  return {
    type: ACTIONS_TYPES.SET_MENU_VISIBLE,
    isMenuVisible
  }
}

export const setModalVisible = isModalVisible => {
  return {
    type: ACTIONS_TYPES.SET_MODAL_VISIBLE,
    isModalVisible
  }
}

export const setLoading = isLoading => {
  return {
    type: ACTIONS_TYPES.SET_LOADING,
    isLoading
  }
}

export const doLogin = (email, nickname) => {
  return dispatch => {
    if (email === USER.email && nickname === USER.nickname) {
      dispatch(setLoading(true))
      return setTimeout(() => {
        dispatch(setUser(nickname))
        dispatch(setLoading(false))
        window.sessionStorage.setItem('user', nickname)
        window.location.href = '/'
      }, 2000)
    }
  }
}
