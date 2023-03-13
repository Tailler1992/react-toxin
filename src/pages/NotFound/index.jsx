import React from 'react';
import {Container} from '../../components/ui';
import image from './in-dev.svg';
import s from './s.module.scss';

export const NotFound = () => {
  return (
    <div className={s.notFound}>
      <Container className={s.wrapper}>
        <h1>Страница находится в разработке</h1>
        <p>Пожалуйста, зайдите позднее</p>
        <img src={image} alt="in-dev"/>
      </Container>
    </div>
  );
};
