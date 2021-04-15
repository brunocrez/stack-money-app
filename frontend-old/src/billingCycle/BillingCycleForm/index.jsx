import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { init } from '../billingCycleActions';

import Input from '../../common/form/Input';
import ItemList from '../ItemList';
import Summary from '../Summary';

class BillingCycleForm extends Component {

  calcSummary() {
    return {
      totalCredits: this.props.credits.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0),
      totalDebts: this.props.debts.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0)
    }
  }

  render() {    
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { totalCredits, totalDebts } = this.calcSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field 
            name="name" 
            component={Input}
            readOnly={readOnly}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome" />
          <Field 
            name="month" 
            component={Input}
            readOnly={readOnly}
            label="Mês"
            cols="12 4"
            placeholder="Informe o Mês" />
          <Field 
            name="year" 
            component={Input}
            readOnly={readOnly}
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano" />
          <Summary credit={totalCredits} debt={totalDebts} />
          <ItemList
            field="credits"
            legend="Créditos"
            list={credits}
            cols="12 6"
            readOnly={readOnly} />
          <ItemList
            showStatus={true}
            field="debts"
            legend="Débitos"
            list={debts}
            cols="12 6"
            readOnly={readOnly} />
        </div>
        <div className="box-footer">
          <button
            type="submit"
            className={`btn btn-${this.props.buttonColor}`}>
            {this.props.buttonLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}>
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);