import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import TabReducer from '../common/tabs/tabsReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: reduxForm,
  toastr: toastrReducer
});

export default rootReducer;