import {
  addMonths,
  getDaysInMonth,
  getMonth,
  setDate,
  setHours,
  startOfToday,
} from 'date-fns';

export interface Month {
  idx: number;
  days: {
    avails: {
      start: Date;
      length: number;
      cost: number;
      booked: boolean;
    }[];
  }[];
}

const AVAIL_START_HOURS = [15, 18];

export const generateCalendarData = (monthCount: number = 6) => {
  const currentDate = startOfToday();
  const calendarProps = [];

  for (let i = 0; i < monthCount; i++) {
    const firstOfMonth = setDate(addMonths(currentDate, i), 1);
    const dayCount = getDaysInMonth(firstOfMonth);
    const idx = getMonth(firstOfMonth);
    const days = [];

    for (let x = 1; x <= dayCount; x++) {
      const avails = [
        {
          start: setHours(setDate(firstOfMonth, x), AVAIL_START_HOURS[0]),
          length: 150,
          cost: 650,
          booked: x % 3 !== 0,
        },
        {
          start: setHours(setDate(firstOfMonth, x), AVAIL_START_HOURS[1]),
          length: 150,
          cost: 650,
          booked: (x + 1) % 2 === 0,
        },
      ];
      days.push({
        avails,
      });
    }
    calendarProps[i] = { firstDate: firstOfMonth, days };
  }
  return { months: calendarProps };
};
