import React from 'react';
import s from './s.module.scss';
import {Button, ButtonForm, Card, RadioButton, Toggle} from "../../ui";
import TextField from "../../ui/TextField";

export const RegistrationCard = () => {
  const [favorite, setFavorite] = React.useState('man');

  const handleChangeOne = () => {
    setFavorite('man');
  };

  const handleChangeTwo = () => {
    setFavorite('woman');
  };


  return (
      <Card className={s.card}>
        <h1>Регистрация аккаунта</h1>
        <div className={s.fullName}>
          <TextField type={'text'} placeholder={'Имя'}/>
          <TextField type={'text'} placeholder={'Фамилия'}/>
        </div>
        <div className={s.radioButtons}>
          <RadioButton label={"Мужчина"} checked={favorite === 'man'} onChange={handleChangeOne}/>
          <RadioButton label={"Женщина"} checked={favorite === 'woman'} onChange={handleChangeTwo}/>
        </div>

        <div className={s.dateBirth}>
          <h3>дата рождения</h3>
          <TextField type={'text'} placeholder={'ДД.ММ.ГГГГ'}/>
        </div>
        <div className={s.login}>
          <h3>данные для входа в сервис</h3>
          <TextField type={'email'} placeholder={'Email'}/>
          <TextField type={'password'} placeholder={'Пароль'}/>
        </div>

        <Toggle title={"Получать спецпредложения"}/>

        <div className={s.buttonForm}>
          <ButtonForm>зарегистрироваться</ButtonForm>
        </div>
        <div className={s.createAccount}>
          <p>Уже есть аккаунт на Toxin?</p>
          <Button className="white">войти</Button>
        </div>
      </Card>
  );
};