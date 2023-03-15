import React from 'react';
import {useField} from "formik";
import s from './s.module.scss';

const TextField = (props) => {
  const [field, meta] = useField(props);

  const error = meta.touched && meta.error;
  const inputClass = error ? s.input + ' ' + s.inputError : s.input;

  return (
      <div className={s.root}>
        <input
            className={inputClass}
            {...field}
            {...props}/>
        {error ? (<div className={s.error}>{meta.error}</div>) : null}
      </div>
  );
};

export default TextField;