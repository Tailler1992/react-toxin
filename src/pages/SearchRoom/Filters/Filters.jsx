import {useDispatch, useSelector} from "react-redux";
import {Accordion, CheckBoxList, CheckBoxListRich, DatePicker, Dropdown, RangeSlider} from "../../../components/common";
import {changeAdditionally, changeAvailability, changeCheck} from "../../../redux/slices/filterSlice";


const Filters = () => {
  const {dates, guests, rangePrices, rules, availability, additionally} = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();
  const handleClickToggleRules = (index) => {
    const checkboxes = rules.map((check) => {
      if (check.id === index) {
        return {...check, checked: !check.checked};
      } else {
        return check;
      }
    });
    dispatch(changeCheck(checkboxes));
  };

  const handleClickToggleAvailability = (index) => {
    const checkboxes = availability.map((check) => {
      if (check.id === index) {
        return {...check, checked: !check.checked};
      } else {
        return check;
      }
    });
    dispatch(changeAvailability(checkboxes));
  };

  const handleClickToggleAdditionally = (index) => {
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
      <>
        <DatePicker value={dates} size={'mini'}/>
        <Dropdown heading={'Гости'} guests={guests}/>
        <RangeSlider min={rangePrices.min} max={rangePrices.max} minValue={7000} maxValue={8500}/>
        <CheckBoxList heading={'правила дома'} data={rules} onChange={handleClickToggleRules}/>
        <CheckBoxListRich heading={'доступность'} data={availability} onChange={handleClickToggleAvailability}/>
        <Accordion heading={'дополнительные удобства'}>
          <CheckBoxList data={additionally} onChange={handleClickToggleAdditionally}/>
        </Accordion>
      </>
  );
};

export default Filters;