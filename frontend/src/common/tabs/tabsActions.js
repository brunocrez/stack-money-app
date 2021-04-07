import { TAB_SELECTED } from './tabsTypes';

export function selectTab(tabId) {
  console.log('tabId ->',tabId)
  return {
    type: TAB_SELECTED,
    payload: tabId
  }
}