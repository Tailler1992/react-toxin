const validate = values => {
  const errors = {};

  if ('firstName' in values) {
    if (!values.firstName) {
      errors.firstName = 'Поле не может быть пустым';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Поле должно быть не более 15 символов';
    }
  }

  if ('lastName' in values) {
    if (!values.lastName) {
      errors.lastName = 'Поле не может быть пустым';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Поле должно быть не более 20 символов';
    }
  }

  if ('email' in values) {
    if (!values.email) {
      errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный адрес электронной почты';
    }
  }

  if ('password' in values) {
    if (!values.password) {
      errors.password = 'Поле не может быть пустым';
    } else if (values.password.length < 8) {
      errors.password = 'Длина пароля должна составлять не менее 8 символов';
    }
  }

  if ('birthday' in values) {
    if (!values.birthday) {
      errors.birthday = 'Поле не может быть пустым';
    } else if (!/^\d{2}\.\d{2}\.\d{4}$/i.test(values.birthday)) {
      errors.birthday = 'Неверный формат даты';
    }
  }

  return errors;
};

export {validate};