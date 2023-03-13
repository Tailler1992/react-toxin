import {useEffect, useRef, useState} from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import {MdOutlineExpandMore} from 'react-icons/md';
import s from './s.module.scss';
import {createDescription} from './utils';

export const Dropdown = ({heading, guests}) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickClose = () => setIsOpen(!isOpen);

  useEffect(() => {
    const listenForOutsideClick = (event) => {
      const cur = menuRef.current;
      const node = event.target;

      if (cur.contains(node)) return;
      setIsOpen(false);
    };

    document.addEventListener(`click`, listenForOutsideClick);

    return () => document.removeEventListener(`click`, listenForOutsideClick);
  }, []);

  const totalGuests = guests.reduce((accum, item) => accum + item.quantity, 0);

  return (
      <div className={s.dropdown} ref={menuRef}>
        <h3>{heading}</h3>
        <div
            className={!isOpen ? `${s.dropBtn}` : `${s.dropBtn} ${s.open}`}
            onClick={() => setIsOpen(!isOpen)}>
          <p>{totalGuests > 0 ? createDescription(guests) : 'Сколько гостей'}</p>
          <MdOutlineExpandMore className={s.icon}/>
        </div>
        <div className={s.wrapper}>
          {isOpen && <DropdownMenu guests={guests} totalGuests={totalGuests} onClickClose={handleClickClose}/>}
        </div>
      </div>
  );
};
