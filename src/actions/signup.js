import request from 'superagent'
import { baseUrl } from '../../App'

const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

export function signupSuccess(signup) {
  return {
    type: SIGNUP_SUCCESS,
    payload: signup
  }
}

export const signup = user => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(user)
    .then(response => {
      dispatch(signupSuccess(response.body))
    })
    .catch(console.error)
}