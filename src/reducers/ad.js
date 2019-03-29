const initState = {}

export default (state = initState, action = {}) => {
  switch (action.type) {

    case 'AD_FETCHED':
      return state = action.payload

    case 'AD_CREATED':
      return state = action.payload

    default:
      return state
  }
}