import React from 'react';
import s from './s.module.scss';

export const RadioButton = ({label, checked, onChange}) => {
  return (
      <label className={s.label}>
        <input className={s.input} type="radio" checked={checked} onChange={onChange}/>
        <span className={s.checkmark}></span>
        <span className={s.title}>{label}</span>
      </label>

  );
};
