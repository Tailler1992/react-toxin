import s from './s.module.scss';

export const Button = ({className, children, onClick, type = 'button', ...rest}) => {
  return (
      <button
          className={`${s.btn} ${s[className]}`}
          onClick={onClick}
          type={type}
          {...rest}>
        {children || 'Новая кнопка'}
      </button>
  );
};