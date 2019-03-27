import request from 'superagent'
import { baseUrl } from '../App'


const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export function loginSuccess(login) {
  return {
    type: LOGIN_SUCCESS,
    payload: login
  }
}

export const login = user => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(user)
    .then(response => {
      dispatch(loginSuccess(response.body))
    })
    .catch(console.error)
}