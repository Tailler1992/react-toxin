import React from 'react';
import {Form, Formik} from "formik";
import s from './s.module.scss';
import {Button, ButtonForm, Card, RadioButton, Toggle} from "../../ui";
import TextField from "../../ui/TextField";
import {validate} from "../../../utils/validate";
import {Link} from "react-router-dom";

export const RegistrationCard = () => {
  return (
      <Card className={s.card}>
        <h1>Регистрация аккаунта</h1>
        <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              picked: 'man',
              birthday: '',
              email: '',
              password: '',
              toggle: false,
            }}
            validate={validate}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}>
          <Form>
            <div className={s.fullName}>
              <TextField name="firstName" type={'text'} placeholder={'Имя'}/>
              <TextField name="lastName" type={'text'} placeholder={'Фамилия'}/>
            </div>
            <div className={s.radioButtons}>
              <RadioButton type="radio" label="Мужчина" name="picked" value="man"/>
              <RadioButton type="radio" label="Женщина" name="picked" value="woman"/>
            </div>
            <h3>дата рождения</h3>
            <div className={s.dateBirth}>
              <TextField name="birthday" type={'text'} placeholder={'ДД.ММ.ГГГГ'}/>
            </div>
            <h3>данные для входа в сервис</h3>
            <div className={s.login}>
              <TextField name="email" type={'email'} placeholder={'Email'}/>
              <TextField name="password" type={'password'} placeholder={'Пароль'}/>
            </div>

            <Toggle label={"Получать спецпредложения"} type="checkbox" name="toggle"/>

            <div className={s.buttonForm}>
              <ButtonForm>зарегистрироваться</ButtonForm>
            </div>
          </Form>
        </Formik>
        <div className={s.createAccount}>
          <p>Уже есть аккаунт на Toxin?</p>
          <Link to={"/sign-in"}>
            <Button className="white">войти</Button>
          </Link>
        </div>
      </Card>
  );
};