import {Link} from 'react-router-dom';
import {DatePicker, Dropdown} from '../../common';
import {ButtonForm, Card} from '../../ui';
import s from './s.module.scss';

export const SearchCard = ({dates, guests}) => {
  return (
      <Card className={s.card}>
        <h1>Найдём номера под ваши пожелания</h1>
        <DatePicker value={dates}/>

        <Dropdown heading={'Гости'} guests={guests}/>

        <Link to={'search-room'} className={s.button}>
          <ButtonForm>подобрать номер</ButtonForm>
        </Link>
      </Card>
  );
};