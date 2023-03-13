import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import s from './s.module.scss';

export const Chart = () => {
  const data = [
    {title: 'Разочарован', value: 0, color: 'url(#bad)'},
    {title: 'Удовлетворительно', value: 50, color: 'url(#satisfactory)'},
    {title: 'Хорошо', value: 50, color: 'url(#good)'},
    {title: 'Великолепно', value: 100, color: 'url(#great)'},
  ];

  const dataEntry = data.reduce((accum, current) => accum + current.value, 0);

  return (
      <div className={s.container}>
        <div className={s.chart}>
          <PieChart
              data={data}
              lineWidth={8}
              startAngle={270}
              paddingAngle={2}
              animate={true}
              labelPosition={0}
          >
            <defs>
              <linearGradient id="bad">
                <stop offset="0" stopColor="#919191"/>
                <stop offset="1" stopColor="#3D4975"/>
              </linearGradient>
              <linearGradient id="satisfactory">
                <stop offset="0" stopColor="#BC9CFF"/>
                <stop offset="1" stopColor="#8BA4F9"/>
              </linearGradient>
              <linearGradient id="good">
                <stop offset="0" stopColor="#6FCF97"/>
                <stop offset="1" stopColor="#66D2EA"/>
              </linearGradient>
              <linearGradient id="great">
                <stop offset="0" stopColor="#FFE39C"/>
                <stop offset="1" stopColor="#FFBA9C"/>
              </linearGradient>
            </defs>
          </PieChart>
          <div className={s.label}>
            <p>{dataEntry}</p>
            <span>голосов</span>
          </div>
        </div>

        <ul className={s.legend}>
          <li className={`${s.item} ${s.great}`}>Великолепно</li>
          <li className={`${s.item} ${s.good}`}>Хорошо</li>
          <li className={`${s.item} ${s.satisfactory}`}>Удовлетворительно</li>
          <li className={`${s.item} ${s.bad}`}>Разочарован</li>
        </ul>

      </div>
  );
};