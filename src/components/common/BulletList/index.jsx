import React from 'react';
import s from './s.module.scss';

export const BulletList = () => {
  return (
      <ul className={s.bulletList}>
        <li> Нельзя с питомцами</li>
        <li> Без вечеринок и мероприятий</li>
        <li> Время прибытия — после 13:00,<br/> а выезд до 12:00</li>
      </ul>
  );
};