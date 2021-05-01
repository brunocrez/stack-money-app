import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ItemList from '../ItemList';
import Summary from '../Summary';

import { API_URL } from '../../URLs';
import Grid from '../../common/layout/Grid';

const BillingCycleForm = (props) => {

  const [creditList, setCreditList] = useState([ { rndId: '', name: '', value: ''} ]);
  const [debtList, setDebtList] = useState([ { rndId: '', name: '', value: '', status: ''} ]);

  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(''); 

  // useEffect(() => {
  //   async function getList() {
  //     const response = await axios.get(`${API_URL}/billingCycles`);
  //     setList(response.data);      
  //   }
  //   getList();
  // }, []);

  // function calcSummary() {
  //   return {
  //     totalCredits: list?.map(el => {
  //       el.credits.map(credit => console.log(credit))
  //     }),
  //     totalDebts: this.props.debts.map(el => +el.value || 0).reduce((acc, next) => acc + next, 0)
  //   }
  // }

  // const { handleSubmit, readOnly, credits, debts } = this.props;
  // const { totalCredits, totalDebts } = this.calcSummary();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      month,
      year,
      credits: creditList,
      debts: debtList
    }

    console.log(data)
    
    axios.post(`${API_URL}/billingCycle`, data)
      .then(res => res.data)
      .catch(e => console.log(e))
  }  

  // console.log(list)

  // const credits = list ? getParamList(list, 'credits') : [];
  // const debts = list ? getParamList(list, 'debts') : [];

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-body">
        <Grid cols="12 4">
          <div className="form-group">
            <label>Nome</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control"
              placeholder="Informe o Nome" />
          </div>
        </Grid>
        <Grid cols="12 4">
          <div className="form-group">
            <label>Mês</label>
            <input
              value={month}
              onChange={e => setMonth(e.target.value)}
              className="form-control"
              placeholder="Informe o Mês" />
          </div>
        </Grid>
        <Grid cols="12 4">
          <div className="form-group">
            <label>Ano</label>
            <input
              value={year}
              onChange={e => setYear(e.target.value)}
              className="form-control"
              placeholder="Informe o Ano" />
          </div>
        </Grid>                
        {/* <Summary credit={totalCredits} debt={totalDebts} /> */}
        <ItemList
          field="credits"
          legend="Créditos"
          list={creditList}
          setList={setCreditList}
          cols="12 6"
          readOnly={false} />
        <ItemList
          showStatus={true}
          field="debts"
          legend="Débitos"
          list={debtList}
          setList={setDebtList}
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