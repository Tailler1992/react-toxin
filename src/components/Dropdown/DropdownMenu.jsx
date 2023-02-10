import React, {useState} from 'react';
import s from './dropdownMenu.module.scss';


const DropdownItem = ({title, count, onClickDecr, onClickIncr}) => {
  return (
    <li className={s.item}>
      <h3>{title}</h3>
      <div className={s.control}>
        <button
          type={'button'}
          onClick={onClickDecr}
          disabled={count <= 0}>
          -
        </button>
        <span>{count}</span>
        <button
          type={'button'}
          onClick={onClickIncr}
          disabled={count >= 99}>
          +
        </button>
      </div>
    </li>
  );
};

const initialDropdownItem = [
  {id: 1, title: 'взрослые', quantity: 0},
  {id: 2, title: 'дети', quantity: 0},
  {id: 3, title: 'младенцы', quantity: 0},
];

const DropdownMenu = () => {
  const [state, setState] = useState(initialDropdownItem);

  const totalGuests = state.reduce((accum, item) => accum + item.quantity, 0);
  console.log(totalGuests);

  const handleClickDec = (index) => {
    setState(state.map((item) => {
      if (item.id === index) {
        return {...item, quantity: item.quantity - 1};
      } else {
        return item;
      }
    }));
  };

  const handleClickInc = (index) => {
    setState(state.map((item) => {
      if (item.id === index) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    }));
  };


  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {state.map(({id, title, quantity}) => (
          <DropdownItem
            key={id}
            title={title}
            count={quantity}
            onClickDecr={() => handleClickDec(id)}
            onClickIncr={() => handleClickInc(id)}
          />
        ))}

      </ul>
      <div className={s.buttons}>
        {totalGuests > 0 ? <button type={'button'}>очистить</button> : ''}

        <button type={'button'}>применить</button>
      </div>
    </div>
  );
};

export default DropdownMenu;
