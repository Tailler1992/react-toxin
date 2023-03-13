import {useCallback, useEffect, useRef, useState} from 'react';
import s from './s.module.scss';

export const RangeSlider = ({min, max, minValue = 50, maxValue = 100}) => {

  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback((value) => {
    return Math.round(((value - min) / (max - min)) * 100);
  }, [min, max]);

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
      <div className={s.container}>
        <div className={s.info}>
          <h3>диапазон цены</h3>
          <p>{Math.round(minVal).toLocaleString()}₽ - {Math.round(maxVal).toLocaleString()}₽</p>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => setMinVal(Math.min(+event.target.value, maxVal - 1))}
            className={min > max - 100 ? `${s.thumbMin} ${s.thumbCurrent}` : s.thumbMin}
        />
        <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => setMaxVal(Math.max(+event.target.value, minVal + 1))}
            className={s.thumbMax}
        />

        <div className={s.slider}>
          <div className={s.track}/>
          <div ref={range} className={s.range}/>
        </div>

        <p className={s.description}>Стоимость за сутки пребывания в номере</p>
      </div>
  );
};