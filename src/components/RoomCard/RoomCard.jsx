import React from 'react';
import Slider from '../Slider/Slider';
import Card from '../ui/Card/Card';
import s from './RoomCard.module.scss';

const RoomCard = () => {
  return (
    <Card className={s.wrapper}>
      <Slider/>
      <div className={s.content}>
        <div className={s.info}>
          <p>№ 888</p>
          <p>9 990₽ в сутки</p>
        </div>
        <div  className={s.rating}>
          <div>✩ ✩ ✩ ✩ ✩</div>
          <p>145 Отзывов</p>
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
