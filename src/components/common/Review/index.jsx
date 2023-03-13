import React from 'react';
import s from "./s.module.scss";
import {Like} from "../Like";

export const Review = ({avatar, description, name, date, like}) => {
  let dater = new Date(date).toLocaleDateString();

  return (
      <div className={s.review}>
        <img src={avatar} alt="ava"/>
        <div>
          <p className={s.fullName}>{name}</p>
          <p>{dater}</p>
        </div>
        <div className={s.like}>
          <Like count={like}/>
        </div>
        <p>{description} </p>
      </div>
  );
};