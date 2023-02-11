import DropdownItem from '../DropdownItem/DropdownItem';
import s from './dropdownMenu.module.scss';


const DropdownMenu = ({state, totalGuests, onClickDecr, onClickIncr, onClickDel, onClickClose}) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {state.map(({id, title, quantity}) => (
          <DropdownItem
            key={id}
            title={title}
            count={quantity}
            onClickDecr={() => onClickDecr(id)}
            onClickIncr={() => onClickIncr(id)}
          />
        ))}
      </ul>
      <div className={s.buttons}>
        <div>
          {totalGuests > 0
            ? <button onClick={onClickDel} type={'button'}>очистить</button>
            : null}
        </div>
        <div>
          <button onClick={onClickClose} type={'button'}>применить</button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
