import React from 'react';
import s from './container.module.scss';
const Container = ({className, children}) => {
  return (
    <div className={`${s.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
