import { TAB_SELECTED } from './tabsTypes';

export function selectTab(tabId) {
  return {
    type: TAB_SELECTED,
    payload: tabId
  }
}