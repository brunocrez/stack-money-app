import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from '../../common/form/Input';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit }= this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field 
            name="name" 
            component={Input}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome" />
          <Field 
            name="month" 
            component={Input}
            label="Mês"
            cols="12 4"
            placeholder="Informe o Mês" />
          <Field 
            name="year" 
            component={Input}
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano" />
        </div>
        <div className="box-footer">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'billingCycleForm'})(BillingCycleForm);