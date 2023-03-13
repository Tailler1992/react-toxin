import React from 'react';
import {MdArrowForward} from 'react-icons/md';
import s from './s.module.scss';

export const ButtonForm = ({className, children, onClick, type = 'submit', ...rest}) => {
  return (
    <button
      className={`${s.btn} ${s[className]}`}
      onClick={onClick}
      type={type}
      {...rest}>
      {children || 'Новая кнопка'}
      <MdArrowForward className={s.icon}/>
    </button>
  );
};