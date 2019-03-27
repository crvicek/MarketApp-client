const initState = {}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case 'GET_ADS':
      return {
        ...state,
        ads: action.payload
      }

    default:
      return state
  }
}