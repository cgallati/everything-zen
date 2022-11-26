import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import {
  CalendarContainer,
  Day,
  Days,
  DaysSlider,
  DaysViewport,
  Header,
  HR,
  MonthName,
  MonthSlider,
  WeekHeader,
} from './styles';
import { getHeaders, getMonthStartPad } from './utils';
import { isSameDay, setDate } from 'date-fns';
import { Month } from '../types';

export interface CalendarProps {
  months: Month[];
  idx: number;
  setIdx: Dispatch<number>;
  selectedDate: Date;
  selectedEndDate?: Date;
  handleDateClick: (
    date: Date,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  clearDateSelections: () => void;
  allowAllSelections: boolean;
}

export const Calendar: FC<CalendarProps> = ({
  months,
  idx,
  setIdx,
  selectedDate,
  selectedEndDate,
  handleDateClick,
  clearDateSelections,
  allowAllSelections = false,
}) => {
  const headers = getHeaders(months);
  const handleMonthClick = (index: number) => {
    if (index === idx + 1 || index === 0 || index === headers.length - 1) {
      return;
    } else if (index === idx + 2) {
      setIdx(idx + 1);
      clearDateSelections();
    } else {
      setIdx(idx - 1);
      clearDateSelections();
    }
  };
  return (
    <CalendarContainer>
      <Header>
        <MonthSlider offset={idx}>
          {headers.map((name, index) => (
            <MonthName
              key={name}
              current={index === idx + 1}
              onClick={(_) => handleMonthClick(index)}
            >
              {name}
            </MonthName>
          ))}
        </MonthSlider>
      </Header>
      <WeekHeader>
        <h4>S</h4>
        <h4>M</h4>
        <h4>T</h4>
        <h4>W</h4>
        <h4>T</h4>
        <h4>F</h4>
        <h4>S</h4>
      </WeekHeader>
      <HR />
      <DaysViewport>
        <DaysSlider offset={idx} totalMonths={months.length}>
          {months.map((month, monthIdx) => (
            <Days
              key={month.firstDate.toDateString()}
              current={idx === monthIdx}
            >
              {Array(getMonthStartPad(month.firstDate))
                .fill(null)
                .map((_, count) => {
                  return (
                    <Day
                      key={'pad-day-' + idx + '' + count}
                      unavailable={false}
                      selected={false}
                    />
                  );
                })}
              {month.days.map((day, id) => {
                const date = setDate(month.firstDate, id + 1);
                const isSelected =
                  isSameDay(selectedDate, date) ||
                  (selectedEndDate ? isSameDay(selectedEndDate, date) : false);
                const available = day.avails.filter(
                  (avail) => !avail.booked
                ).length;
                return (
                  <Day
                    key={idx + '' + id}
                    unavailable={!available}
                    selected={isSelected}
                    onClick={(e) =>
                      (allowAllSelections || available) &&
                      handleDateClick(setDate(month.firstDate, id + 1), e)
                    }
                  >
                    {id + 1}
                  </Day>
                );
              })}
            </Days>
          ))}
        </DaysSlider>
      </DaysViewport>
    </CalendarContainer>
  );
};
