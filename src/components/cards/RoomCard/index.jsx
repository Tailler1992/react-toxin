import {Link} from "react-router-dom";
import {Slider, Rating} from '../../common';
import {Card} from "../../ui";
import s from './s.module.scss';
import RoomInfo from "../../common/RoomInfo";


export const RoomCard = ({number, photoGallery, isLuxury, price, rating, feedback}) => {
  return (
      <Card className={s.wrapper}>
        <Slider photoGallery={photoGallery}/>
        <Link to={`/room/${number}`}>
          <div className={s.content}>
            <RoomInfo number={number} isLuxury={isLuxury} price={price}/>
            <div className={s.rating}>
              <div><Rating stars={rating}/></div>
              <p><span>{feedback}</span> Отзывов</p>
            </div>
          </div>
        </Link>
      </Card>
  );
};