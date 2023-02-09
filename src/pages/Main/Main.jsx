import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import Container from '../../components/ui/Container/Container';
import s from './main.module.scss';

const Main = () => {
  return (
    <main className={s.main}>
      <Container>
        <SearchForm/>
        <div className={s.info}>
          <p>Лучшие номера для вашей работы,<br/> отдыха и просто вдохновения</p>
        </div>
      </Container>
    </main>
  );
};

export default Main;
