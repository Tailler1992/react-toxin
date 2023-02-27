import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Accordion from '../../components/Accordion/Accordion';
import CheckBoxList from '../../components/CheckBoxList/CheckBoxList';
import CheckBoxListRich from '../../components/CheckBoxListRich/CheckBoxListRich';
import Dropdown from '../../components/Dropdown/Dropdown';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import RoomCard from '../../components/RoomCard/RoomCard';
import Container from '../../components/ui/Container/Container';
import {changeAdditionally, changeCheck} from '../../redux/slices/filterSlice';
import dataRooms from './dataRooms';
import s from './searchRoom.module.scss';
import {Link} from "react-router-dom";

const SearchRoom = () => {
  const rules = useSelector((state) => state.filterSlice.rules);
  const additionally = useSelector((state) => state.filterSlice.additionally);

  const dispatch = useDispatch();

  const handleClickToggle = (index) => {
    const checkboxes = rules.map((check) => {
      if (check.id === index) {
        return {...check, checked: !check.checked};
      } else {
        return check;
      }
    });
    dispatch(changeCheck(checkboxes));
  };

  const handleClickToggle2 = (index) => {
    const checkboxes = additionally.map((check) => {
      if (check.id === index) {
        return {...check, checked: !check.checked};
      } else {
        return check;
      }
    });
    dispatch(changeAdditionally(checkboxes));
  };

  return (
      <main>
        <Container className={s.wrapper}>
          <aside className={s.panel}>
            <Dropdown heading={'Гости'}/>
            <CheckBoxList heading={'правила дома'} data={rules} onChange={handleClickToggle}/>
            <RangeSlider min = {5000} max = {10000} minValue = {7000} maxValue = {8500}/>
            <CheckBoxListRich heading={'доступность'}/>
            <Accordion heading={'дополнительные удобства'}>
              <CheckBoxList data={additionally} onChange={handleClickToggle2}/>
            </Accordion>
          </aside>
          <div className={s.board}>
            <h1>Номера, которые мы для вас подобрали</h1>
            <div className={s.rooms}>
              {dataRooms.map(({roomNumber, content}) =>
                  <RoomCard key={roomNumber} roomNumber={roomNumber} {...content}/>,
              )}
            </div>
          </div>

        </Container>
      </main>
  );
};

export default SearchRoom;
