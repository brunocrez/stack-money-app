import { BILLING_CYCLES_FETCHED } from './billingCycleTypes';

const INITIAL_STATE = { list: [] };

const billingCycleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BILLING_CYCLES_FETCHED:
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}

export default billingCycleReducer;