import React from 'react';
import Grid from '../../layout/Grid';

const Input = (props) => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly} />
    </div>
  </Grid>
);

export default Input;