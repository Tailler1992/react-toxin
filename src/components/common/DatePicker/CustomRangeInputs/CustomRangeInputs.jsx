import {BiCalendar} from 'react-icons/bi';
import s from './s.module.scss';

const CustomRangeInputs = ({openCalendar, value, classSize}) => {
  const from = value[0] || "";
  const to = value[1] || "";

  if (classSize) {
    const customValue = from && to ? from + " - " + to : from;

    return (
        <>
          <h3 className={s.title}>даты пребывания в отеле</h3>
          <div className={s.inputContainer}>
            <input
                className={`${s.input} ${s.inputFull}`}
                type={'text'}
                onFocus={openCalendar}
                value={customValue}
                placeholder="Укажите даты пребывания"
                readOnly
            />
            <BiCalendar className={s.icon}/>
          </div>
        </>
    );
  } else {
    return (
        <div className={s.container}>
          <h3 className={s.firstTitle}>прибытие</h3>
          <div className={s.inputContainer}>
            <input
                className={s.input}
                type={'text'}
                onFocus={openCalendar}
                value={from}
                placeholder="ДД.ММ.ГГГГ"
                readOnly/>
            <BiCalendar className={s.icon}/>
          </div>

          <h3 className={s.secondTitle}>выезд</h3>
          <div className={s.inputContainer}>
            <input
                className={s.input}
                type={'text'}
                onFocus={openCalendar}
                value={to}
                placeholder="ДД.ММ.ГГГГ"
                readOnly/>
            <BiCalendar className={s.icon}/>
          </div>
        </div>
    );
  }
};

export default CustomRangeInputs;