import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import ButtonForm from '../ui/ButtonForm/ButtonForm';
import Card from '../ui/Card/Card';
import DatePicker from '../DatePicker/DatePicker';

import s from './searchForm.module.scss';


const SearchForm = () => {
  return (
    <Card className={s.card}>
      <h1>Найдём номера под ваши пожелания</h1>
      <DatePicker className={s.datepicker}/>
      <Dropdown className={s.dropdown} heading={'Гости'}/>
      <Link to={'search-room'}>
        <ButtonForm>подобрать номер</ButtonForm>
      </Link>
    </Card>
  );
};

export default SearchForm;
