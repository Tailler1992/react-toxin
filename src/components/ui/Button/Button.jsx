import React from 'react';
import s from './button.module.scss';

const Button = ({className, children, onClick, type = 'button', ...rest}) => {
  return (
    <button
      className={`${s.btn} ${s[className]}`}
      onClick={onClick}
      type={type}
      {...rest}>
      {children || 'Новая кнопка'}
    </button>
  );
};

export default Button;
