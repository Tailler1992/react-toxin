import React from 'react';
import {CheckBox} from '../../ui';
import s from './s.module.scss';

export const CheckBoxListRich = ({heading, data, onChange}) => {
  return (
      <div className={s.container}>
        <h3>{heading}</h3>
        <div className={s.content}>
          {data.map((item) => (
              <CheckBox
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  checked={item.checked}
                  onChange={() => onChange(item.id)}/>
          ))}
        </div>
      </div>
  );
};
