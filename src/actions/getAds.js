import request from 'superagent'
import { baseUrl } from '../App'

const ADS_FETCHED = 'ADS_FETCHED'

export function adsFetched(ads) {
  return {
    type: ADS_FETCHED,
    payload: ads,
  }
}


export const getAds = () => dispatch => {
  request(`${baseUrl}/ads`)
    .then(response => {
      dispatch(adsFetched(response.body))
    })
    .catch(console.error)
}