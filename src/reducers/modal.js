const initState = false

export default (state = initState, action = {}) => {
  switch (action.type) {

    case 'MODAL':
      return !state

    default:
      return state
  }
}