import {CheckBox} from '../../ui';
import s from './s.module.scss';

export const CheckBoxList = ({heading, data, onChange}) => {
  return (
      <div className={s.container}>
        {heading && <h3>{heading}</h3>}
        <div className={s.content}>
          {data.map((item) => (
              <CheckBox key={item.id} title={item.title} checked={item.checked}
                        onChange={() => onChange(item.id)}/>
          ))}
        </div>
      </div>
  );
};

