import React from 'react';
import s from './dropdownItem.module.scss';

const DropdownItem = ({title, count, onClickDecr, onClickIncr}) => {
  return (
    <li className={s.item}>
      <h3>{title}</h3>
      <div className={s.control}>
        <button
          type={'button'}
          onClick={onClickDecr}
          disabled={count <= 0}>
          -
        </button>
        <span>{count}</span>
        <button
          type={'button'}
          onClick={onClickIncr}
          disabled={count >= 99}>
          +
        </button>
      </div>
    </li>
  );
};

export default DropdownItem;