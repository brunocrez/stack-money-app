import React, { Component } from 'react';
import { Field } from 'redux-form';

import Grid from '../../common/layout/Grid';
import InputCreditDebt from '../../common/form/InputCreditDebt';

class CreditList extends Component {

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, idx) => (
      <tr key={idx}>
        <td>
          <Field
            name={`credits[${idx}].name`}
            component={InputCreditDebt}
            readOnly={this.props.readOnly} />
        </td>
        <td>
          <Field
            name={`credits[${idx}].value`}
            component={InputCreditDebt}
            readOnly={this.props.readOnly} />
        </td>
        <td></td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
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
}

export default CreditList;