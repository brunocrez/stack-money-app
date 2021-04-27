import React from 'react';

const TabContent = (props) => {

  const isOn = props.selectedTab === props.id;
  // const visible = this.props.tab.visible[this.props.id];

  return (
    <div id={props.id} className={`tab-pane ${isOn ? 'active' : ''}`}>
      {props.children}
    </div>
  );
}

export default TabContent;