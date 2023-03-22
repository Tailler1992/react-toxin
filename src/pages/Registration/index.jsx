import {Container} from "../../components/ui";
import {RegistrationCard} from "../../components/cards";
import s from './s.module.scss';

export const Registration = () => {
  return (
      <main className={s.main}>
        <Container className={s.wrapper}>
          <RegistrationCard/>

        </Container>
      </main>
  );
};