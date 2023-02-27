import React, {useState} from 'react';
import {MdOutlineExpandMore} from 'react-icons/md';
import s from './accordion.module.scss';

const Accordion = ({heading, children}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className={s.button} onClick={() => setToggle(!toggle)}>
        <h3>{heading}</h3>
        <MdOutlineExpandMore className={toggle ? `${s.icon} ${s.open}`: s.icon}/>
      </button>
      {toggle &&
        <div className={s.content}>
          {children}
        </div>}


    </div>
  );
};

export default Accordion;
