import {Link} from 'react-router-dom';
import Copyright from './Copyright/Copyright';
import {Logo, Container} from '../../ui';
import s from './s.module.scss';
import {SubscribeForm} from "../SubscribeForm";

export const Footer = () => {
  return (
      <footer className={s.footer}>
        <Container className={s.wrapper}>
          <div className={s.info}>
            <Logo/>
            <p>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
          </div>
          <div>
            <h3>навигация</h3>
            <ul>
              <li><Link to="">О нас</Link></li>
              <li><Link to="">Новости</Link></li>
              <li><Link to="">Служба поддержки</Link></li>
              <li><Link to="">Услуги</Link></li>
            </ul>
          </div>
          <div>
            <h3>о нас</h3>
            <ul>
              <li><Link to="">О сервисе</Link></li>
              <li><Link to="">Наша команда</Link></li>
              <li><Link to="">Вакансии</Link></li>
              <li><Link to="">Инвесторы</Link></li>
            </ul>
          </div>
          <div>
            <h3>Служба поддержки</h3>
            <ul>
              <li><Link to="">Соглашения</Link></li>
              <li><Link to="">Сообщества</Link></li>
              <li><Link to="">Связь с нами</Link></li>
            </ul>
          </div>
          <div className={s.subscription}>
            <h3>Подписка</h3>
            <p>Получайте специальные предложения и новости сервиса</p>
            <SubscribeForm placeholder={'Email'}/>
          </div>
        </Container>
        <Copyright/>
      </footer>
  );
};
