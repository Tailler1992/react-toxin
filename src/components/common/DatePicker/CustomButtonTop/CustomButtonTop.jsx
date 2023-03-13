import React from 'react';
import s from './s.module.scss'
import {MdArrowBack, MdArrowForward} from "react-icons/md";

const CustomButtonTop = ({direction, handleClick, disabled}) => {
  return (
      <button
          className={disabled ? `${s.button} ${s.disabled}` : s.button}
          onClick={handleClick}
      >
        {direction === "right" ? <MdArrowForward/> : <MdArrowBack/>}
      </button>
  );
};

export default CustomButtonTop;