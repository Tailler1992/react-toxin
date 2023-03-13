import React from 'react';
import s from './s.module.scss';

export const Toggle = ({title, checked}) => {
  return (
      <label className={s.label}>
        <input className={s.input} type="checkbox" checked={checked}/>
        <span className={s.checkmark}></span>
        <span className={s.title}>{title}</span>
      </label>
  );
};