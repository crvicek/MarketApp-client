import { combineReducers } from 'redux'
import ads from './ads'
import ad from './ad'
import modal from './modal'
import user from './user';

export default combineReducers({
  modal: modal,
  ads: ads,
  ad: ad,
  user: user,
})