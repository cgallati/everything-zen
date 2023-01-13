import React, { Dispatch, useState } from 'react';
import { getDate } from 'date-fns';
// import { analyticsEvent } from '../../../../lib/analytics';
import {
  Calendar,
  Availability,
  Month,
  CharterTimeButtons,
  Formlet,
  FormletHeading,
  FormletSubHeading,
} from '@everything-zen/ui-components';

export type CalendarFormletProps = {
  availability: Month[];
  setSelectedDate: any;
  selectedDate: any;
  advanceForm: any;
  setSelectedAvail: Dispatch<Availability>;
};

export const CalendarFormlet: React.FC<CalendarFormletProps> = ({
  availability,
  setSelectedDate,
  selectedDate,
  advanceForm,
  setSelectedAvail,
}) => {
  const [monthIdx, setMonthIdx] = useState<number>(0);
  const handleCharterSelection = (avail: Availability) => {
    setSelectedAvail(avail);
    // analyticsEvent({
    //   action: 'add_to_cart',
    //   params: {
    //     event_label: 'select-charter',
    //   },
    // });
    advanceForm();
  };

  const handleDateClick = (
    date: Date,
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedDate(date);
  };

  return (
    <Formlet>
      <FormletHeading>PRIVATE CHARTER</FormletHeading>
      <FormletSubHeading>HARBOR SAIL | 6 PASSENGERS MAX</FormletSubHeading>
      <Calendar
        months={availability}
        idx={monthIdx}
        setIdx={setMonthIdx}
        clearDateSelections={() => setSelectedDate(null)}
        selectedDate={selectedDate}
        handleDateClick={handleDateClick}
      />
      <CharterTimeButtons
        availDay={
          availability[monthIdx].days[getDate(selectedDate) - 1]?.avails || []
        }
        setSelectedAvail={handleCharterSelection}
      />
    </Formlet>
  );
};
