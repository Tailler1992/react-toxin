import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './nav.module.scss';
import navData from './navData';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {navData.map((item) =>
          <li key={item.id}>
            <NavLink className={s.link} to={item.url}>{item.title}</NavLink>
          </li>,
        )}
      </ul>
    </nav>
  );
};

export default Nav;
