import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setGuests} from '../../redux/slices/searchSlice';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import {MdOutlineExpandMore} from 'react-icons/md';
import s from './dropdown.module.scss';
import {createDescription} from './utils';

const Dropdown = ({className, heading}) => {
  const guests = useSelector((state) => state.searchSlice.guests);

  const [isOpen, setIsOpen] = useState(false);
  const handleClickClose = () => setIsOpen(!isOpen);

  const totalGuests = guests.reduce((accum, item) => accum + item.quantity, 0);


  return (
    <div className={`${s.dropdown} ${className}`}>
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

export default Dropdown;
