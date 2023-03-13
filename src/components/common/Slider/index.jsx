import {useState} from 'react';
import SliderButtons from './SliderButtons/SliderButtons';
import SliderDots from './SliderDots/SliderDots';
import noPhoto from '../../../assets/img/rooms/no-photo.jpg';
import s from './s.module.scss';


export const Slider = ({photoGallery, showButton = true, showDots = true}) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const countSlides = photoGallery.length;

  const handleClickNext = () => {
    if (slideIndex !== photoGallery.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === photoGallery.length) {
      setSlideIndex(1);
    }
  };

  const handleClickPrev = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(photoGallery.length);
    }
  };

  const handleClickDot = (index) => {
    setSlideIndex(index);
  };

  return (
      <div className={s.container}>
        {countSlides === 0 ? <img src={noPhoto} alt="room"/> :
            photoGallery.map((obj, index) => {
              return (
                  <div className={slideIndex === index + 1 ? `${s.slide} ${s.currentSlide}` : s.slide} key={obj.id}>
                    <img src={obj.cover} alt=""/>
                  </div>
              );
            })}
        {countSlides > 1 && showButton &&
            <SliderButtons
                movePrev={handleClickPrev}
                moveNext={handleClickNext}
                className={s.buttons}/>}
        {showDots && countSlides > 1
            ? <SliderDots slideIndex={slideIndex} onClick={handleClickDot} countSlides={countSlides}/>
            : null}
      </div>
  );
};