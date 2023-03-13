import React from 'react';
import s from './s.module.scss';
const CustomButtonBottom = ({handleChange, datePickerRef}) => {
  return (
      <div className={s.buttons}>
        <button onClick={() => handleChange(['', ''])}> очистить</button>
        <button onClick={() => datePickerRef.current.closeCalendar()}> применить</button>
      </div>
  );
};

export default CustomButtonBottom;