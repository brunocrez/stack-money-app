import React from 'react';

const InputCreditDebit = (props) => (
  <input
    className="form-control"
    {...props.input} 
    placeholder={props.placeholder}
    type={props.type}
    readOnly={props.readOnly} />
);

export default InputCreditDebit;