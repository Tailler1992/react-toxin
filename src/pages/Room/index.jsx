import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {BulletList, Chart, InfoList, Review} from "../../components/common";
import {Container} from "../../components/ui";
import s from "./s.module.scss";
import {BookingCard} from "../../components/cards";
import {useSelector} from "react-redux";


export const Room = () => {
  const [room, setRoom] = useState();
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();
  const {dates, guests} = useSelector(state => state.filterSlice);


  useEffect(() => {

    axios.get('https://63f9eff4897af748dcc5f3ab.mockapi.io/rooms/' + id)
        .then(
            (res) => {
              console.log(res.data);
              setRoom(res.data)
            },
            (error) => console.log(error));

    axios.get('https://63f9eff4897af748dcc5f3ab.mockapi.io/rooms/' + id + '/reviews')
        .then(
            (res) => setReviews(res.data),
            (error) => console.log(error));

  }, [id]);


  if (!room) {
    return;
  }

  if (!reviews) {
    return;
  }

  return (
      <main className={s.main}>
        <div className={s.gallery}>
          {room.photoGallery.slice(0, 3).map(({id, img, title}) => <img src={img} key={id} alt={title}/>)}
        </div>


        <Container className={s.wrapper}>
          <div className={s.info}>

            <div className={s.explanation}>
              <div>
                <h2>Сведения о номере</h2>
                <InfoList/>

              </div>
              <div>
                <h2 className={s.chartTitle}>Впечатления от номера</h2>
                <Chart />
              </div>
            </div>


            <div className={s.reviews}>
              <div className={s.title}>
                <h2>Отзывы посетителей номера</h2>
                <p>{reviews.length} отзыва</p>
              </div>
              {reviews.map(({avatar, date, description, id, like, name}) =>
                  <Review key={id} avatar={avatar} date={date} description={description} like={like} name={name}/>
              )}
            </div>

            <div className={s.rules}>
              <div>
                <h2>Правила</h2>
                <BulletList/>
              </div>
              <div>
                <h2>Отмена</h2>
                <p>Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы
                  получите полный возврат за вычетом сбора за услуги.</p>
              </div>

            </div>
          </div>
          <div>
            <BookingCard
                dates={dates}
                number={room.roomNumber}
                isLuxury={room.isLuxury}
                price={room.price}
                guests={guests}/>
          </div>

        </Container>
      </main>
  );
};