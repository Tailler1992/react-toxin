import {useEffect, useRef, useState} from 'react';
import axios from "axios";
import qs from "qs";
import {Pagination} from '../../components/common';
import {RoomCard, RoomCardSkeleton} from '../../components/cards';
import {Container} from '../../components/ui';
import Filters from "./Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/slices/filterSlice";
import s from './s.module.scss';
import {useNavigate} from "react-router";
import {fetchRooms} from "../../redux/slices/roomsSlice";


export const SearchRoom = () => {
  const currentPage = useSelector(state => state.filterSlice.currentPage);
  const {data, loading} = useSelector(state => state.roomsSlice);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isMounted = useRef(false);

  const handlePageClick = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    dispatch(fetchRooms(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: currentPage
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [currentPage]);

  const skeletons = Array.from({length: 12}, (_, i) => <RoomCardSkeleton key={i}/>);
  const rooms = data.map(({roomNumber, photoGallery, isLuxury, price, rating, feedback}) => {
    return (
        <RoomCard
            key={roomNumber}
            number={roomNumber}
            photoGallery={photoGallery}
            isLuxury={isLuxury}
            price={price}
            rating={rating}
            feedback={feedback}
        />
    );
  });

  return (
      <main className={s.searchRoom}>
        <Container className={s.wrapper}>
          <aside className={s.panel}>
            <Filters/>
          </aside>
          <div className={s.board}>
            <h1>Номера, которые мы для вас подобрали</h1>

            {loading === 'failed' ? <p className={s.error}>Повторите попытку позднее...</p> :
                <div className={s.rooms}>
                  {loading === 'pending' ? skeletons : rooms}
                </div>
            }
            <div className={s.pagination}>
              <Pagination currentPage={currentPage} handlePageClick={handlePageClick}/>
            </div>
          </div>
        </Container>
      </main>
  );
};