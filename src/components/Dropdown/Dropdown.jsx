import {useState} from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import {MdOutlineExpandMore} from 'react-icons/md';
import s from './dropdown.module.scss';
import {createDescription} from './utils';

const Dropdown = ({className, heading, initialDD}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(initialDD);

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
  };

  return (
    <div className={`${s.dropdown} ${className}`}>
      <h3>{heading}</h3>
      <div
        className={!isOpen ? `${s.dropBtn}` : `${s.dropBtn} ${s.open}`}
        onClick={() => setIsOpen(!isOpen)}>
        <p>{totalGuests > 0 ? createDescription(state) : 'Сколько гостей'}</p>
        <MdOutlineExpandMore className={s.icon}/>
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
    </div>
  );
};

export default Dropdown;
