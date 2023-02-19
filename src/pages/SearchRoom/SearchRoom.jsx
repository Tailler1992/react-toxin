import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import RoomCard from '../../components/RoomCard/RoomCard';
import Container from '../../components/ui/Container/Container';
import s from './searchRoom.module.scss';

const SearchRoom = () => {
  return (
    <main>
      <Container className={s.wrapper}>
        <aside className={s.panel}>
          <h3>даты пребывания в отеле</h3>
          <Dropdown/>
        </aside>
        <div  className={s.board}>
          <h2>Номера, которые мы для вас подобрали</h2>
          <div className={s.rooms}>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
          </div>
        </div>

      </Container>
    </main>
  );
};

export default SearchRoom;
