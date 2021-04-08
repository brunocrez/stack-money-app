import { combineReducers } from 'redux';

import TabReducer from '../common/tabs/tabsReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
  tab: TabReducer,
  billingCycle: BillingCycleReducer
});

export default rootReducer;