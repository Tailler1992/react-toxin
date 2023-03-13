import React from 'react';
import s from './s.module.scss';
import {Container} from "../../components/ui";
import {RegistrationCard} from "../../components/cards";

export const Registration = () => {
  return (
      <main className={s.main}>
        <Container className={s.wrapper}>
          <RegistrationCard/>

        </Container>
      </main>
  );
};