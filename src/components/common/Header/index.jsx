import {Button} from '../../ui';
import Nav from './Nav/Nav';
import {Logo, Container} from '../../ui';
import s from './s.module.scss';
import {Link} from "react-router-dom";


export const Header = () => {
  return (
      <header className={s.header}>
        <Container className={s.wrapper}>
          <Logo/>
          <div className={s.nav}>
            <Nav/>
            <div className={s.buttons}>
              <Link to={'sign-in'}>
                <Button className={'white'}>Войти</Button>
              </Link>
              <Link to={'registration'}>
                <Button>Зарегистрироваться</Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>
  );
};