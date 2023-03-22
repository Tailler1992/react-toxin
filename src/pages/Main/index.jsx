import {SearchCard} from '../../components/cards';
import {Container} from '../../components/ui';
import {useSelector} from "react-redux";
import s from './s.module.scss';

export const Main = () => {
  const {dates, guests} = useSelector((state) => state.filterSlice);

  return (
      <main className={s.main}>
        <Container className={s.wrapper}>
          <SearchCard dates={dates} guests={guests}/>
          <div className={s.info}>
            <p>Лучшие номера для вашей работы,<br/> отдыха и просто вдохновения</p>
          </div>
        </Container>
      </main>
  );
};
