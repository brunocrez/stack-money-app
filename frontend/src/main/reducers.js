import { combineReducers } from 'redux';

import TabReducer from '../common/tabs/tabsReducer';

const rootReducer = combineReducers({
  tab: TabReducer
});

export default rootReducer;