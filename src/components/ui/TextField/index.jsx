import React from 'react';
import s from './s.module.scss';

const TextField = (props) => {
  return (
      <input className={s.input} {...props}/>
  );
};

export default TextField;