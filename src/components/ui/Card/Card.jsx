import React from 'react';
import s from './card.module.scss';

const Card = ({className, children}) => {
  return (
    <div className={`${s.container} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
