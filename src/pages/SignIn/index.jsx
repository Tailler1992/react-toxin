import React from 'react';
import {SignInCard} from "../../components/cards";
import {Container} from "../../components/ui";
import s from "./s.module.scss";


export const SignIn = () => {
  return (
      <main className={s.main}>
        <Container className={s.wrapper}>
          <SignInCard/>

        </Container>
      </main>
  );
};