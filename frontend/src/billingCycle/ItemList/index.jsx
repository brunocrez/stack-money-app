import React, { useState } from 'react';

import { produce } from 'immer';
import { generate } from 'shortid';

import Grid from '../../common/layout/Grid';

const ItemList = (props) => {

  function add() {
    if (props.showStatus) {
      props.setList(currentList => [...currentList, { rndId: generate(), name: '', value: '', status: '' }]);
    } else {
      props.setList(currentList => [...currentList, { rndId: generate(), name: '', value: '' }]);
    }
  }

  function remove(credit) {
    if (props.list.length == 1) {
      return;
    }

    props.setList(currentList => currentList.filter(el => el.rndId !== credit.rndId));
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
            {props.list.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    className="form-control"
                    value={item.name}
                    onChange={e => {
                      const name = e.target.value;
                      props.setList(currentItem =>
                        produce(currentItem, v => {
                          v[idx].name = name;
                        })
                      );
                    }} />
                </td>
                <td>
                  <input
                    className="form-control"
                    value={item.value}
                    onChange={e => {
                      const value = e.target.value;
                      props.setList(currentItem =>
                        produce(currentItem, v => {
                          v[idx].value = value;
                        })
                      );
                    }} />
                </td>
                { props.showStatus &&
                  <td>
                    <input
                      className="form-control"
                      value={item.status}
                      onChange={e => {
                        const status = e.target.value;
                        props.setList(currentItem =>
                          produce(currentItem, v => {
                            v[idx].status = status;
                          })
                        );
                      }} />
                  </td>
                }               
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={add}>
                    <i className="fa fa-plus"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => remove(item)}>
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>              
            ))}
          </tbody>
        </table>
      </fieldset>
    </Grid>
  );
}

export default ItemList;