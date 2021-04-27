import './styles.css';

import React from 'react';

const TabHeader = (props) => {
  
  const isOn = props.selectedTab === props.target;
  // const visible = this.props.tab.visible[this.props.target];
  return (
    <li className={isOn ? 'active' : ''}>
      <a
        data-toggle="tab"
        onClick={(e) => props.setSelectedTab(props.target)}
        data-target={props.target}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
      </a>
    </li>
  );
}

export default TabHeader;