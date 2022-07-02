import { addMonths, format, getDay, setDate, subMonths } from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';
import { Month } from '@components/Reservations/types';

export const getHeaders = (months: Month[]): string[] => {
  const headers: string[] = [format(subMonths(months[0].firstDate, 1), 'MMMM')];
  months.forEach((month) => headers.push(format(month.firstDate, 'MMMM')));
  headers.push(
    format(addMonths(months[months.length - 1].firstDate, 1), 'MMMM')
  );
  return headers;
};

export const getMonthStartPad = (date: Date): number => {
  return getDay(setDate(date, 1));
};

const ONE_HOUR_MS = 60 * 60 * 1000;

export const getChsOffset = (dateTime: Date): number =>
  dateTime.getTimezoneOffset() / 60 + // hours offset b/t here and UTC
  getTimezoneOffset('America/New_York', dateTime) / ONE_HOUR_MS; // hours offset b/t CHS and UTC
