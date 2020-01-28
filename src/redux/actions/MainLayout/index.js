import fetch from 'isomorphic-fetch'

import * as ACTIONS_TYPES from './actionsTypes'

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

export const doLogin = () => {
  return dispatch => {
    const url = '../../data/user.json'
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        //dispatch(setLoading(false))
        console.log(data)
      })
      .catch(err => console.log(err))
  }
}
