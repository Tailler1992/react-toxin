import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Container from '../../components/ui/Container/Container';
import s from './searchRoom.module.scss';

const SearchRoom = () => {
  return (
    <main>
      <Container className={s.wrapper}>
        <aside className={s.panel}>
          <Dropdown/>
        </aside>
        <div>
          <h2>Номера, которые мы для вас подобрали</h2>
        </div>

      </Container>
    </main>
  );
};

export default SearchRoom;
