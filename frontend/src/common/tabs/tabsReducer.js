import { TAB_SELECTED, TAB_SHOW } from './tabsTypes';

const INITIAL_STATE = { selected: '', visible: {} };

const tabsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TAB_SELECTED:
      return { ...state, selected: action.payload }
    case TAB_SHOW:
      return { ...state, visible: action.payload }
    default:
      return state;
  }
}

export default tabsReducer;