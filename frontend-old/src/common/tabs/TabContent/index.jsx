import React, { Component } from 'react';
import { connect } from 'react-redux';
import If from '../../operator/If';

class TabContent extends Component {
  render() {
    const isOn = this.props.tab.selected === this.props.id;
    const visible = this.props.tab.visible[this.props.id];
    return (
      <If show={visible}>
        <div id={this.props.id} className={`tab-pane ${isOn ? 'active' : ''}`}>
          {this.props.children}
        </div>
      </If>
    );
  }
}

const mapStateToProps = state => ({ tab: state.tab });

export default connect(mapStateToProps)(TabContent);