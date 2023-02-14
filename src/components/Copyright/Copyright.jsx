import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../ui/Container/Container';
import SocialFB from './SocialFB';
import SocialIns from './SocialIns';
import SocialTW from './SocialTW';

import s from './copyright.module.scss';


const Copyright = () => {
  return (
    <div className={s.copyright}>
      <Container className={s.wrapper}>
        <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
        <div className={s.social}>
          <Link to={'/'}><SocialTW/></Link>
          <Link to={'/'}><SocialFB/></Link>
          <Link to={'/'}><SocialIns/></Link>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
