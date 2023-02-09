import React from 'react';

import Nav from '../Nav/Nav';
import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import s from './header.module.scss';
import Button from '../ui/Button/Button';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.wrapper}>
        <Logo/>
        <div className={s.nav}>
          <Nav/>
          <div className={s.buttons}>
            <Button className={'white'}>Войти</Button>
            <Button>Зарегистрироваться</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
