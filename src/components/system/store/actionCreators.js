import * as actionTypes from './constants'

import { createUser, getUser } from '../../../api/user.js'
export const AddAccount = params => {
  return dispatch => {
    createUser(params)
      .then(res => {
        dispatch({
          type: actionTypes.ADDACCOUNT,
          result: 'success'
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.ADDACCOUNT,
          result: 'error'
        })
      })
  }
}

export const getUserList = params => {
  return dispatch => {
    getUser(params)
      .then(res => {
         
        dispatch({
          type: actionTypes.USERLIST,
          result: res.data.info.userList,
          total:res.data.info.total
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.USERLIST,
          result:[]
        })
      })
  }
}
