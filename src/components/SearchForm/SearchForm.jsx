import Dropdown from '../Dropdown/Dropdown';
import Card from '../ui/Card/Card';
import DatePicker from '../DatePicker/DatePicker';

import s from './searchForm.module.scss';


const SearchForm = () => {

  return (
    <Card className={s.card}>
      <h1>Найдём номера под ваши пожелания</h1>
      <DatePicker/>
      <Dropdown/>
    </Card>
  );
};

export default SearchForm;
