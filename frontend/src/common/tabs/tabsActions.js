import { TAB_SELECTED, TAB_SHOW } from './tabsTypes';

export function selectTab(tabId) {
  return {
    type: TAB_SELECTED,
    payload: tabId
  }
}

export function showTabs(...tabs) {
  const tabsToShow = {};
  tabs.forEach(el => tabsToShow[el] = true);
  return {
    type: TAB_SHOW,
    payload: tabsToShow
  }
}