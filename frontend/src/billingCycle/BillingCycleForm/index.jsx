import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { init } from '../billingCycleActions';

import Input from '../../common/form/Input';
import ItemList from '../ItemList';
import Summary from '../Summary';

const BillingCycleForm = (props) => {

  // function calcSummary() {
  //   return {
  //     totalCredits: this.props.credits.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0),
  //     totalDebts: this.props.debts.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0)
  //   }
  // }

  // const { handleSubmit, readOnly, credits, debts } = this.props;
  // const { totalCredits, totalDebts } = this.calcSummary();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('HANDLE FORM!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-body">     
        {/* <Field 
          name="name" 
          component={Input}
          readOnly={readOnly}
          label="Nome"
          cols="12 4"
          placeholder="Informe o Nome" /> */}
        <Input
          label="Nome"
          cols="12 4"
          placeholder="Informe o Nome" />
        {/* <Field 
          name="month" 
          component={Input}
          readOnly={readOnly}
          label="Mês"
          cols="12 4"
          placeholder="Informe o Mês" /> */}
        <Input
          label="Mês"
          cols="12 4"
          placeholder="Informe o Mês" />          
        {/* <Field 
          name="year" 
          component={Input}
          readOnly={readOnly}
          label="Ano"
          cols="12 4"
          placeholder="Informe o Ano" /> */}
        <Input
          label="Ano"
          cols="12 4"
          placeholder="Informe o Ano" />             
        {/* <Summary credit={totalCredits} debt={totalDebts} /> */}
        <ItemList
          field="credits"
          legend="Créditos"
          list={credits}
          setList="func"
          cols="12 6"
          readOnly={false} />
        <ItemList
          showStatus={true}
          field="debts"
          legend="Débitos"
          list={debts}
          setList="func"
          cols="12 6"
          readOnly={false} />
      </div>
      <div className="box-footer">
        <button
          type="submit"
          className={`btn btn-${props.buttonColor}`}>
          {this.props.buttonLabel}
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={e => console.log('CLICK CANCELAR!')}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default BillingCycleForm;
// BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

// const selector = formValueSelector('billingCycleForm');

// const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') });
// const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);