import FullStarSVG from "./FullStarSVG";
import HalfStarSVG from "./HalfStarSVG";
import BorderStarSvg from "./BorderStarSVG";
import s from './s.module.scss';

export const Rating = ({stars}) => {

  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;

    if (stars >= index + 1) {
      return <FullStarSVG/>;
    } else if (stars >= number) {
      return <HalfStarSVG/>;
    } else {
      return <BorderStarSvg/>;
    }
  });

  return (
      <ul className={s.container}>
        {ratingStar.map((star, index) => <li key={index}>{star}</li>)}
      </ul>
  );
};