import './styles.css';

import React from 'react';

const TabHeader = (props) => {
  
  const isOn = props.selectedTab === props.target;
  const visible = props.visibleTabs.includes(props.target);
  
  return (
    <>
      { visible &&
        <li className={isOn ? 'active' : ''}>
          <a
            data-toggle="tab"
            onClick={(e) => props.setSelectedTab(props.target)}
            data-target={props.target}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
          </a>
        </li>
      }
    </>
  );
}

export default TabHeader;