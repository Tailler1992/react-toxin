import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import s from './sliderButtons.module.scss';

const SliderButtons = ({movePrev, moveNext, className}) => {
  return (
    <>
      <button
        className={`${s.btn} ${s.prev} ${className}`}
        onClick={movePrev}>
        <FiChevronLeft className={s.icon}/>
      </button>
      <button
        className={`${s.btn} ${s.next} ${className}`}
        onClick={moveNext}>
        <FiChevronRight className={s.icon}/>
      </button>
    </>
  );
};

export default SliderButtons;
