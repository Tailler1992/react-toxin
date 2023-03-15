import React from 'react';
import s from './s.module.scss';
import {useField} from "formik";

export const Toggle = ({label, ...props}) => {
  const [field] = useField(props);

  return (
      <label className={s.label}>
        <input className={s.input} {...field} {...props}/>
        <span className={s.checkmark}></span>
        <span className={s.title}>{label}</span>
      </label>
  );
};