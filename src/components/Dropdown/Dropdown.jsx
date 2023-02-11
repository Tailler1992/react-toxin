import {useState} from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import s from './dropdown.module.scss';
import {createDescription} from './utils';

const initialDropdownItem = [
  {id: 1, title: 'взрослые', quantity: 0},
  {id: 2, title: 'дети', quantity: 0},
  {id: 3, title: 'младенцы', quantity: 0},
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(initialDropdownItem);

  const totalGuests = state.reduce((accum, item) => accum + item.quantity, 0);
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

  const handleClickDel = () => {
    setState(state.map(item => {
      if (item.quantity > 0) {
        return {...item, quantity: 0};
      } else {
        return item;
      }
    }));
  };

  const handleClickClose = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h3>Гости</h3>
      <div className={!isOpen ? `${s.dropBtn}` : `${s.dropBtn} ${s.open}`} onClick={() => setIsOpen(!isOpen)}>
        {totalGuests > 0 ? createDescription(state) : 'Сколько гостей'}
      </div>
      <div className={s.wrapper}>
        {isOpen &&
          <DropdownMenu
            state={state}
            totalGuests={totalGuests}
            onClickDecr={handleClickDec}
            onClickIncr={handleClickInc}
            onClickDel={handleClickDel}
            onClickClose={handleClickClose}
          />}
      </div>
    </>
  );
};

export default Dropdown;
