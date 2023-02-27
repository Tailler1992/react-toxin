import React from 'react';
import s from "./s.module.scss";
import Container from "../../components/ui/Container/Container";

const Room = () => {
  return (
      <main className={s.main}>
        <Container className={s.wrapper}>
          Номер
        </Container>
      </main>
  );
};

export default Room;