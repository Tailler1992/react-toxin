import React, {useState} from 'react';
import SliderButtons from './SliderButtons/SliderButtons';

import photo1 from '../../assets/img/rooms/room666/1-cover.jpg';
import photo2 from '../../assets/img/rooms/room666/2-cover.jpg';
import photo3 from '../../assets/img/rooms/room666/3-cover.jpg';
import photo4 from '../../assets/img/rooms/room666/4-cover.jpg';

import s from './slider.module.scss';
import SliderDots from './SliderDots/SliderDots';

const rooms = [
  {id: 352, image: photo1},
  {id: 350, image: photo2},
  {id: 444, image: photo3},
  {id: 450, image: photo4},
];
const Slider = ({showButton = true, showDots = true}) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const countSlides = rooms.length;

  const handleClickNext = () => {
    if (slideIndex !== rooms.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === rooms.length) {
      setSlideIndex(1);
    }
  };

  const handleClickPrev = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(rooms.length);
    }
  };

  const handleClickDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={s.container}>
      {rooms.map((obj, index) => {
        return (
          <div className={slideIndex === index + 1 ? `${s.slide} ${s.currentSlide}` : s.slide} key={obj.id}>
            <img src={obj.image} alt=""/>
          </div>
        );
      })}
      {showButton && <SliderButtons movePrev={handleClickPrev} moveNext={handleClickNext}/>}
      {showDots && countSlides > 1
        ? <SliderDots slideIndex={slideIndex} onClick={handleClickDot} countSlides={countSlides}/>
        : null}
    </div>
  );
};

export default Slider;
