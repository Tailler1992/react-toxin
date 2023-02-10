import React, {useState} from 'react';
import TextField from '../ui/TextField/TextField';
import DropdownMenu from './DropdownMenu';
import s from './dropdown.module.scss';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3>Гости</h3>

      <TextField onClick={handleClick}/>
      <div className={s.wrapper}>
        {isOpen && <DropdownMenu/>}
      </div>
    </>
  );
};

export default Dropdown;
