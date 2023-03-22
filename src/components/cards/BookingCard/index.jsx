import React from 'react';
import {ButtonForm, Card} from "../../ui";
import s from "./s.module.scss";
import {DatePicker, Dropdown} from "../../common";
import {Link} from "react-router-dom";
import RoomInfo from "../../common/RoomInfo";
import inclineWord from "../../../utils/inclineWord";

const getNumberOfDays = (start, end) => {
  if (!start || !end) {
    return 0;
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = end - start;

  return Math.round(diffInTime / oneDay);
};

export const BookingCard = ({dates, number, isLuxury, price, guests}) => {
  const numberOfDays = getNumberOfDays(...dates);
  const priceOfDays = price * numberOfDays;
  const priceOfServices = 0;
  const priceOfAdditionalServices = 300;
  const total = priceOfDays + priceOfServices + priceOfAdditionalServices;

  const declensionWord = inclineWord(numberOfDays, ['сутки', 'суток', 'суток']);

  return (
      <Card className={s.card}>
        <RoomInfo number={number} isLuxury={isLuxury} price={price}/>
        <DatePicker value={dates}/>

        <Dropdown heading={'Гости'} guests={guests}/>
        <div className={s.details}>
          <div><span>{price}₽ х {numberOfDays} {declensionWord}</span><span>{priceOfDays}₽</span></div>
          <div><span>Сбор за услуги: скидка 2 179₽</span><span>{priceOfServices}₽</span></div>
          <div><span>Сбор за дополнительные услуги</span><span>{priceOfAdditionalServices}₽</span></div>
        </div>
        <div className={s.total}>
          <span>Итого</span>
          <div className={s.line}></div>
          <span>{total}₽</span>
        </div>
        <Link to={'search-room'}>
          <ButtonForm>забронировать</ButtonForm>
        </Link>
      </Card>
  );
};