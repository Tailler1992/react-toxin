import React from 'react';
import s from './s.module.scss';
import TextField from "../../ui/TextField";
import ArrowForwardSvg from "./ArrowForwardSVG";

export const SubscribeForm = ({placeholder}) => {
  return (
      <div className={s.container}>
        <TextField placeholder={placeholder}/>
        <button className={s.button}>
          <ArrowForwardSvg/>
        </button>

      </div>

  );
};