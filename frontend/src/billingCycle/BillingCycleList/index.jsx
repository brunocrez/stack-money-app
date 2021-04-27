import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL } from '../../URLs';

const BillingCycleList = () => {

  const [list, setList] = useState(null);

  useEffect(() => {
    async function getList() {
      const response = await axios.get(`${API_URL}/billingCycles`);
      setList(response.data);
    }
    getList();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th className="table-actions">Ações</th>
          </tr>
        </thead>
        <tbody>
          { list && list.map(el => (
            <tr key={el._id}>
              <td>{el.name}</td>
              <td>{el.month}</td>
              <td>{el.year}</td>
              <td>
                <button 
                  className="btn btn-warning"
                  onClick={() => console.log('EDIT')}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => console.log('DELETE')}>
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default BillingCycleList;