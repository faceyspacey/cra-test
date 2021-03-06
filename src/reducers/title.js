import { capitalize } from '../utils'

export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'RFR Demo'
    case 'LIST':
      return `RFR: ${capitalize(action.payload.category)}`
    case 'VIDEO':
      return `RFR: ${capitalize(action.payload.slug)}`
    case 'LOGIN':
      return 'RFR Login'
    case 'ADMIN':
      return 'RFR Admin'
    default:
      return state
  }
}