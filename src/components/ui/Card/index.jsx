import React from 'react';
import s from './s.module.scss';

export const Card = ({className, children}) => {
  return (
    <div className={`${s.container} ${className}`}>
      {children}
    </div>
  );
};