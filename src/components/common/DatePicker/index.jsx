import {useRef} from 'react';
import {DateObject, default as DPicker} from "react-multi-date-picker";
import ru_ru from './ru_ru';
import CustomButtonTop from "./CustomButtonTop/CustomButtonTop";
import CustomButtonBottom from "./CustomButtonBottom/CustomButtonBottom";
import CustomRangeInputs from "./CustomRangeInputs/CustomRangeInputs";
import './calendar.scss';
import {useDispatch} from "react-redux";
import {setDates} from "../../../redux/slices/filterSlice";

export const DatePicker = ({value, size}) => {
  const datePickerRef = useRef();
  const classSize = (size && ' custom-mini-calendar') || '';
  const dispatch = useDispatch();

  function handleChange(value) {
    const newArr = value.map(date => date ? date.valueOf() : undefined);

    if (value.length === 1) {
      dispatch(setDates([...newArr, undefined]));
    } else {
      dispatch(setDates([...newArr]));
    }

  }

  return (
      <DPicker
          render={<CustomRangeInputs classSize={classSize}/>}
          renderButton={<CustomButtonTop/>}
          ref={datePickerRef}
          value={value}
          onChange={handleChange}
          locale={ru_ru}
          range={true}
          minDate={new DateObject().toDate()}
          shadow={false}
          className={"custom-calendar" + classSize}
          disableYearPicker
          disableMonthPicker
          format={"DD.MM.YYYY"}
          weekStartDayIndex={1}
          arrow={<div className="custom-arrow"/>}
          mapDays={({date, selectedDate, isSameDate}) => {
            let props = {};

            props.style = {
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif"
            };

            if (isSameDate(date, selectedDate[0])) props.className = "custom-selected";
            if (isSameDate(date, selectedDate[1])) props.className = "custom-selected";

            return props;
          }}
      >
        <CustomButtonBottom datePickerRef={datePickerRef} handleChange={handleChange}/>
      </DPicker>
  );
};