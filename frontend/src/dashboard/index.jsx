import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

import { API_URL } from '../URLs';

const Dashboard = () => {

  const [summary, setSummary] = useState(null);
  
  useEffect(() => {
    async function getSummary() {
      const response = await axios.get(`${API_URL}/billingCycles/summary`);
      setSummary(response.data);
    }
    getSummary();
  }, []);

  return (
    <div> 
      { summary && 
        <>
          <ContentHeader title="Dashboard" small="Versão 1.0.0" />
          <Content>
            <Row>
              <ValueBox
                cols="12 4"
                color="green"
                icon="bank"
                value={`R$ ${summary.credit}`}
                text="Total de Créditos" />
              <ValueBox
                cols="12 4"
                color="red"
                icon="credit-card"
                value={`R$ ${summary.debt}`}
                text="Total de Débitos" />
              <ValueBox
                cols="12 4"
                color="blue"
                icon="money"
                value={`R$ ${summary.credit - summary.debt}`}
                text="Valor Consolidado" />
            </Row>
          </Content>
        </>
      }       

    </div>
  );
}

export default Dashboard;