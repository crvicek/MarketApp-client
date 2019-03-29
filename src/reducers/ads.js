const initState = []

export default (state = initState, action = {}) => {
  switch (action.type) {

    case 'ADS_FETCHED':
      return action.payload

    default:
      return state
  }
}