import s from './s.module.scss';

export const CheckBox = ({title, subtitle, checked, onChange}) => {

  return (
      <label className={s.checkbox}>
        <input className={s.input} type="checkbox" checked={checked} onChange={onChange}/>
        <span className={s.box}/>
        <div className={s.text}>
          <p className={subtitle && s.bold}>{title}</p>
          <p className={s.subtitle}>{subtitle}</p>
        </div>
      </label>
  );
};