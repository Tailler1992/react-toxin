import s from './sliderDots.module.scss';

const SliderDots = ({slideIndex, onClick, countSlides}) => {
  return (
    <div className={s.container}>
      {Array.from({length: countSlides}).map((item, index) => (
        <div
          className={slideIndex === index + 1 ? `${s.dot} ${s.active}` : s.dot}
          key={index}
          onClick={() => onClick(index + 1)}>
        </div>
      ))}
    </div>
  );
};

export default SliderDots;
