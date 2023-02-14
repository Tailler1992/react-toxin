import React from 'react';
import Container from '../../components/ui/Container/Container';
import s from './searchRoom.module.scss';

const SearchRoom = () => {
  return (
    <main>
      <Container className={s.wrapper}>
        <aside className={s.panel}>Левая Панель</aside>
        <div>
          <h2>Номера, которые мы для вас подобрали</h2>
        </div>

      </Container>
    </main>
  );
};

export default SearchRoom;
