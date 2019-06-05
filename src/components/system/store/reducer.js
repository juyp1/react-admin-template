import * as actionTypes from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  result: '',
  userstotal:0,
  listresult: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADDACCOUNT:
      return state.set('result', action.result)
    case actionTypes.USERLIST:
      return state.set('listresult', action.result).set('userstotal',action.total)

    default:
      return state
  }
}
