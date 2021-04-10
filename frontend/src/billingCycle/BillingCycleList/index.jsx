import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from '../billingCycleActions';

class BillingCycleList extends Component {

  componentDidMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(el => (
      <tr key={el._id}>
        <td>{el.name}</td>
        <td>{el.month}</td>
        <td>{el.year}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);