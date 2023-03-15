import {Field, Form, Formik} from 'formik';
import {MdDoneAll} from 'react-icons/md';
import ArrowForwardSvg from "./ArrowForwardSVG";
import SpinnerSvg from './SpinnerSVG';
import s from './s.module.scss';
import textField from "../../ui/TextField/s.module.scss";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = true;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = false;
  }

  return errors;
};

export const SubscribeForm = ({placeholder}) => {
  return (
      <Formik
          initialValues={{email: ''}}
          validate={validate}
          onSubmit={(values, {setSubmitting, resetForm, setStatus}) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
              setStatus(true);
            }, 1400);
          }}>
        {({isSubmitting, status}) =>
            status ?
                <div className={s.answer}>
                  <div>
                    <p> Спасибо! </p>
                    <p>Осталось подтвердить почту.</p>
                  </div>
                  <MdDoneAll className={s.icon}/>
                </div>
                :
                <Form className={s.container}>
                  <Field
                      className={textField.input}
                      name="email"
                      type="email"
                      placeholder={placeholder}
                      autoComplete="off"
                  />
                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className={s.button}>
                    {isSubmitting ? <SpinnerSvg/> : <ArrowForwardSvg/>}
                  </button>
                </Form>
        }
      </Formik>
  );
};