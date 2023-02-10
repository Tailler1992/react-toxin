import React from 'react';
import s from './textField.module.scss';

const TextField = ({className, type, onClick}) => {
  return (
    <input
      className={`${s.input} ${s[className] || ''}`}
      type={type}
      onClick={onClick}/>
  );
};

export default TextField;
