import Dropdown from '../Dropdown/Dropdown';
import ButtonForm from '../ui/ButtonForm/ButtonForm';
import Card from '../ui/Card/Card';
import DatePicker from '../DatePicker/DatePicker';

import s from './searchForm.module.scss';

const initialDD = [
  {id: 1, title: 'взрослые', quantity: 0},
  {id: 2, title: 'дети', quantity: 0},
  {id: 3, title: 'младенцы', quantity: 0},
];

const SearchForm = () => {
  return (
    <Card className={s.card}>
      <h1>Найдём номера под ваши пожелания</h1>
      <DatePicker className={s.datepicker}/>
      <Dropdown className={s.dropdown} heading={'Гости'} initialDD={initialDD}/>
      <ButtonForm>подобрать номер</ButtonForm>
    </Card>
  );
};

export default SearchForm;
