import React from 'react';

export default props => (
  <input
    className="form-control"
    {...props.input} 
    placeholder={props.placeholder}
    type={props.type}
    readOnly={props.readOnly} />
);