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

  // function add(index, item = {}) {
  //   if (!this.props.readOnly) {
  //     this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
  //   }
  // }

  // function remove(index) {
  //   if (!this.props.readOnly && this.props.list.length > 1) {
  //     this.props.arrayRemove('billingCycleForm', this.props.field, index);
  //   }
  // }

  function add() {
    console.log('add')
  }

  function remove() {
    console.log('remove')
  }



  return (
    <Grid cols={props.cols}>
      <fieldset>
        <legend>{props.legend}</legend>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              { props.showStatus && <th>Status</th>}
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  className="form-control"
                  placeholder="Informe o Nome"
                  type="text" />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe o Valor" />
              </td>
              { props.showStatus && 
                <td>
                  <input
                    className="form-control"
                    placeholder="Informe o Status" />
                </td>
              }
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => add()}>
                  <i className="fa fa-plus"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => add()}>
                  <i className="fa fa-clone"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => remove()}>
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </Grid>
  );
}

export default ItemList;