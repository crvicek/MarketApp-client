import request from 'superagent'
import { baseUrl } from '../App'

const AD_CREATED = 'AD_CREATED'

export function adCreated(ad) {
  return {
    type: AD_CREATED,
    payload: ad,
  }
}


export const createAd = (ad) => dispatch => {
  request
    .post(`${baseUrl}/ads`)
    .send(ad)
    .then(response => {
      dispatch(adCreated(response.body))
    })
    .catch(console.error)
}