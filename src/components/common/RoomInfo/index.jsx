import React from 'react';
import s from './s.module.scss';
const RoomInfo = ({number, isLuxury, price}) => {
  return (
      <div className={s.info}>
        <p className={s.room}>№{' '}<span>{number}</span>{isLuxury && <i>люкс</i>}</p>
        <p className={s.price}><span>{price}₽</span> в сутки</p>
      </div>
  );
};

export default RoomInfo;