import { SerializableMonth } from '@everything-zen/data-access';
import { Month } from '@everything-zen/ui-components';
import { addHours } from 'date-fns';

const getOffsetFromChs = (date: Date, chsOffset: -4 | -5) => {
  const localOffset = date.getTimezoneOffset() / 60;
  return localOffset + chsOffset;
};
export const deserializeAvailability = (
  serializedAvail: SerializableMonth[]
): Month[] =>
  serializedAvail.map((month) => ({
    ...month,
    firstDate: addHours(
      new Date(month.firstDate),
      getOffsetFromChs(new Date(month.firstDate), month.firstDateOffsetHours)
    ),
    days: month.days.map((day) => ({
      ...day,
      avails: day.avails.map((avail) => ({
        ...avail,
        start: addHours(
          new Date(avail.start),
          getOffsetFromChs(new Date(avail.start), avail.startOffsetHours)
        ),
      })),
    })),
  }));
