import React from 'react';
import {Button, ButtonForm, Card} from "../../ui";
import s from "./s.module.scss";
import TextField from "../../ui/TextField";

export const SignInCard = () => {
  return (
      <Card className={s.card}>
        <h1>Войти</h1>
        <div className={s.login}>
          <TextField type={'email'} placeholder={'Email'}/>
          <TextField type={'password'} placeholder={'Пароль'}/>
        </div>
        <div className={s.buttonForm}>
          <ButtonForm>войти</ButtonForm>
        </div>
        <div className={s.createAccount}>
          <p>Нет аккаунта на Toxin? </p>
          <Button className="white">создать</Button>
        </div>
      </Card>
  );
};