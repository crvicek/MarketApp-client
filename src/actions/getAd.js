import request from 'superagent'
import { baseUrl } from "../App";

export const AD_FETCHED = 'AD_FETCHED'

export function adFetched(ad) {
  console.log('Action')
  return {
    type: AD_FETCHED,
    payload: ad,
  }
}

export const getAd = id => dispatch => {
  request(`${baseUrl}/ads/${id}`)
    .then(response => {
      dispatch(adFetched(response.body))
    })
    .catch(console.error)

}