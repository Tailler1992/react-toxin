import React from 'react';
import s from './s.module.scss';
import EmotionSVG from "./EmotionSVG";
import CitySVG from "./CitySVG";
import WhatsHotSvg from "./WhatsHotSvg";

export const InfoList = () => {
  return (
      <ul className={s.infoList}>
        <li>
          <div className={s.icon}>
            <EmotionSVG/>
          </div>
          <div>
            <h3>Комфорт</h3>
            <p> Шумопоглощающие стены</p>
          </div>
        </li>
        <li>
          <div className={s.icon}>
            <CitySVG/>
          </div>
          <div>
            <h3>Удобство</h3>
            <p> Окно в каждой из спален</p>
          </div>
        </li>
        <li>
          <div className={s.icon}>
            <WhatsHotSvg/>
          </div>
          <div>
            <h3>Уют</h3>
            <p> Номер оснащён камином</p>
          </div>
        </li>
      </ul>
  );
};