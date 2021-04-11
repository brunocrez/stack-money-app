import React, { Component } from 'react';
import { Field } from 'redux-form';

import Grid from '../../common/layout/Grid';
import InputCreditDebt from '../../common/form/InputCreditDebt';

class CreditList extends Component {

  renderRows() {
    return (
      <tr>
        <td>
          <Field
            name="credits[0].name"
            component={InputCreditDebt}
            readOnly={this.props.readOnly} />
        </td>
        <td>
          <Field
            name="credits[0].value"
            component={InputCreditDebt}
            readOnly={this.props.readOnly} />
        </td>
        <td></td>
      </tr>
    );
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