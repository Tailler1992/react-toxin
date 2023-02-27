import React from 'react';
import Slider from '../Slider/Slider';
import Card from '../ui/Card/Card';
import s from './RoomCard.module.scss';
import {Link} from "react-router-dom";

const RoomCard = ({roomNumber, photoGallery, isLuxury, price, rating, feedback}) => {


  return (
      <Card className={s.wrapper}>
        <Slider photoGallery={photoGallery}/>
        <div className={s.content}>
          <div className={s.info}>
            <Link to={`/room/${roomNumber}`}>
              <p className={s.room}>№{' '}<span>{roomNumber}</span>{isLuxury && <i>люкс</i>}</p>
            </Link>
            <p className={s.price}><span>{price}₽</span> в сутки</p>
          </div>
          <div className={s.rating}>
            <div>✩ ✩ ✩ ✩ ✩</div>
            <p><span>{feedback}</span> Отзывов</p>
          </div>
        </div>
      </Card>
  );
};

export default RoomCard;
