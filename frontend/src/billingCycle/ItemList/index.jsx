import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import { produce } from 'immer';

import Grid from '../../common/layout/Grid';
import InputCreditDebt from '../../common/form/InputCreditDebt';
import If from '../../common/operator/If';

const ItemList = (props) => {

  // const [creditList, setCreditList] = useState();
  // const [debtList, setDebtList] = useState();

  function add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
    }
  }

  function remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, index);
    }
  }

  function renderRows() {
    const list = props.list || [];
    return list.map((item, idx) => (
      <tr key={idx}>
        <td>
          <input
            className="form-control"
            placeholder="Informe o Nome"
            type="text"
            value={item.name}
            onChange={e => {
              const name = e.target.value;
              props.setList(currentItem => 
                produce(currentItem, v => {
                  v[idx].name = name;
                })
              )
            }}/>
          {/* <Field
            name={`${this.props.field}[${idx}].name`}
            placeholder="Informe o Nome"
            component={InputCreditDebt}
            readOnly={this.props.readOnly} /> */}
        </td>
        <td>
          <Field
            name={`${this.props.field}[${idx}].value`}
            placeholder="Informe o Valor"
            component={InputCreditDebt}
            readOnly={this.props.readOnly} />
        </td>
        <If show={this.props.showStatus}>
          <td>
            <Field
                name={`${this.props.field}[${idx}].status`}
                placeholder="Informe o Status"
                component={InputCreditDebt}
                readOnly={this.props.readOnly} />
          </td>
        </If>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(idx + 1)}>
            <i className="fa fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.add(idx + 1, item)}>
            <i className="fa fa-clone"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove(idx)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <Grid cols={this.props.cols}>
      <fieldset>
        <legend>{this.props.legend}</legend>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <If show={this.props.showStatus}>
                <th>Status</th>
              </If>
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </fieldset>
    </Grid>
  );
}

//const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default ItemList;