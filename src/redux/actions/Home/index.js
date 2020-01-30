import fetch from 'isomorphic-fetch'

import * as ACTIONS_TYPES from './actionsTypes'
import { APIUSERS } from '../../../constants/apis'
import {
  setLoading
} from '../MainLayout'

export const setUsers = users => {
  return {
    type: ACTIONS_TYPES.SET_USERS,
    users
  }
}

export const getUsers = users => {
  return dispatch => {
    dispatch(setLoading(true))
    return fetch(APIUSERS)
      .then(response => response.json())
      .then(data => {
        dispatch(setLoading(false))
        dispatch(setUsers(data.data))
      })
      .catch(err => console.log(err))
  }
}
