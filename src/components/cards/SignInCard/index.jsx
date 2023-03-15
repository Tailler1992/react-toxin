import React from 'react';
import {Button, ButtonForm, Card} from "../../ui";
import s from "./s.module.scss";
import TextField from "../../ui/TextField";
import {Form, Formik} from "formik";
import {validate} from "../../../utils/validate";
import {Link} from "react-router-dom";

export const SignInCard = () => {
  return (
      <Card className={s.card}>
        <h1>Войти</h1>
        <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={validate}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}>
          <Form>
            <div className={s.login}>
              <TextField name="email" type="email" placeholder="Email"/>
              <TextField name="password" type="password" placeholder="Пароль"/>
            </div>
            <div className={s.buttonForm}>
              <ButtonForm>войти</ButtonForm>
            </div>
          </Form>
        </Formik>
        <div className={s.createAccount}>
          <p>Нет аккаунта на Toxin? </p>
          <Link to={'/registration'}>
            <Button className="white">создать</Button>
          </Link>
        </div>
      </Card>


  );
};