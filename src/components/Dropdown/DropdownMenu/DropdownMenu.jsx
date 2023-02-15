import {useDispatch} from 'react-redux';
import {setGuests} from '../../../redux/slices/searchSlice';
import DropdownItem from '../DropdownItem/DropdownItem';
import s from './dropdownMenu.module.scss';


const DropdownMenu = ({guests, totalGuests, onClickClose}) => {
  const dispatch = useDispatch();
  const handleClickDec = (index) => {
    const data = guests.map((item) => {
      if (item.id === index) {
        return {...item, quantity: item.quantity - 1};
      } else {
        return item;
      }
    });
    dispatch(setGuests(data));
  };

  const handleClickInc = (index) => {
    const data = guests.map((item) => {
      if (item.id === index) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
    dispatch(setGuests(data));
  };

  const handleClickDel = () => {
    const data = guests.map(item => {
      if (item.quantity > 0) {
        return {...item, quantity: 0};
      } else {
        return item;
      }
    })
    dispatch(setGuests(data));
  };



  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {guests.map(({id, title, quantity}) => (
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
        <div>
          {totalGuests > 0
            ? <button onClick={handleClickDel} type={'button'}>очистить</button>
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
