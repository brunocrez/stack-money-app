import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { init } from '../billingCycleActions';

import Input from '../../common/form/Input';
import ItemList from '../ItemList';
import Summary from '../Summary';

import { API_URL } from '../../URLs';

const BillingCycleForm = (props) => {

  const [list, setList] = useState(null);

  const [creditList, setCreditList] = useState(null);

  useEffect(() => {
    async function getList() {
      const response = await axios.get(`${API_URL}/billingCycles`);
      setList(response.data);      
    }
    getList();
  }, []);

  function calcSummary() {
    return {
      totalCredits: list?.map(el => {
        el.credits.map(credit => console.log(credit))
      }),
      // totalDebts: this.props.debts.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0)
    }
  }

  // const { handleSubmit, readOnly, credits, debts } = this.props;
  // const { totalCredits, totalDebts } = this.calcSummary();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('HANDLE FORM!');
  }

  console.log(list)

  // const credits = list ? getParamList(list, 'credits') : [];
  // const debts = list ? getParamList(list, 'debts') : [];

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-body">
        <Input
          label="Nome"
          cols="12 4"
          placeholder="Informe o Nome" />
        <Input
          label="Mês"
          cols="12 4"
          placeholder="Informe o Mês" />
        <Input
          label="Ano"
          cols="12 4"
          placeholder="Informe o Ano" />
          { calcSummary() && console.log(calcSummary().totalCredits)}
        {/* <Summary credit={totalCredits} debt={totalDebts} /> */}
        <ItemList
          field="credits"
          legend="Créditos"
          list={creditList}
          setList={setList}
          setList="func"
          cols="12 6"
          readOnly={false} />
        <ItemList
          showStatus={true}
          field="debts"
          legend="Débitos"
          // list={debts}
          setList="func"
          cols="12 6"
          readOnly={false} />
      </div>
      <div className="box-footer">
        <button
          type="submit"
          className={`btn btn-${props.buttonColor}`}>
          {props.buttonLabel}
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