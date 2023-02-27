import React from 'react';
import CheckBox from '../ui/CheckBox/CheckBox';
import s from './checkBoxListRich.module.scss';

const CheckBoxListRich = ({heading}) => {
  return (
    <div className={s.container}>
      <h3>{heading}</h3>
      <div className={s.content}>
        <CheckBox title={'Широкий коридор'} subtitle={`Ширина коридоров в номере не менее 91 см.`}/>
        <CheckBox title={'Широкий коридор'} subtitle={`На 1 этаже вас встретит специалист  и проводит до номера.`}/>
      </div>
    </div>
  );
};

export default CheckBoxListRich;
