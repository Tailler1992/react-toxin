import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import s from './sliderButtons.module.scss';

const SliderButtons = ({movePrev, moveNext}) => {
  return (
    <>
      <button
        className={`${s.btn} ${s.prev}`}
        onClick={movePrev}>
        <FiChevronLeft className={s.icon}/>
      </button>
      <button
        className={`${s.btn} ${s.next}`}
        onClick={moveNext}>
        <FiChevronRight className={s.icon}/>
      </button>
    </>
  );
};

export default SliderButtons;
