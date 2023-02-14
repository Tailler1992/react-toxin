import React from 'react';
import TextField from '../ui/TextField/TextField';
import s from './datePicker.module.scss';

const DatePicker = ({className}) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div>
        <h3>прибытие</h3>
        <TextField type={'text'}/>
      </div>
      <div>
        <h3>выезд</h3>
        <TextField type={'text'}/>
      </div>
    </div>

  );
};

export default DatePicker;
