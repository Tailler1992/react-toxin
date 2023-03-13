import React, {useState} from 'react';
import s from './s.module.scss';
import BorderFavoriteSVG from "./BorderFavoriteSVG";
import FullFavoriteSVG from "./FullFavoriteSVG";

export const Like = ({count}) => {
  const [toggle, setToggle] = useState(false);

  return (
      <button
          className={toggle ? `${s.like} ${s.active}` : s.like}
          type={"button"}
          onClick={() => setToggle(!toggle)}>
        {toggle ? <FullFavoriteSVG/> : <BorderFavoriteSVG/>}
        <p>{toggle ? +count + 1 : count}</p>
      </button>
  );
};