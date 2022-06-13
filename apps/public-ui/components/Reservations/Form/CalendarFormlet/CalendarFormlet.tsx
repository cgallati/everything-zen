import { CharterTimeButton, Formlet, Heading, SubHeading } from "./styles"
import React, { Dispatch, FC, useState } from "react"
import { format, getDate } from "date-fns"
import { analyticsEvent } from "../../../../lib/analytics"
import { Availability, Month } from "../../types"
import { Calendar } from "../../AvailabilityCalendar"

export type CalendarFormletProps = {
  availability: Month[]
  setSelectedDate: any
  selectedDate: any
  advanceForm: any
  setSelectedAvail: Dispatch<Availability>
}

export const CalendarFormlet: React.FC<CalendarFormletProps> = ({
  availability,
  setSelectedDate,
  selectedDate,
  advanceForm,
  setSelectedAvail,
}) => {
  const [monthIdx, setMonthIdx] = useState<number>(0)
  const handleCharterSelection = (avail: Availability) => {
    setSelectedAvail(avail)
    analyticsEvent({
      action: "add_to_cart",
      params: {
        event_label: "select-charter",
      },
    })
    advanceForm()
  }

  const CharterTimeButtons: FC<{ availDay: Availability[] }> = ({
    availDay,
  }) => {
    return (
      <>
        {availDay.map((avail) => (
          <CharterTimeButton
            key={avail.start.toTimeString()}
            booked={avail.booked}
            disabled={avail.booked}
            onClick={() => handleCharterSelection(avail)}
          >
            <strong>{format(avail.start, "h:mm")}</strong> {avail.length / 60}{" "}
            HOUR {avail.type} CRUISE
          </CharterTimeButton>
        ))}
      </>
    )
  }

  return (
    <Formlet>
      <Heading>PRIVATE CHARTER</Heading>
      <SubHeading>HARBOR SAIL | 6 PASSENGERS MAX</SubHeading>
      <Calendar
        months={availability}
        idx={monthIdx}
        setIdx={setMonthIdx}
        {...{ selectedDate, setSelectedDate }}
      />
      <CharterTimeButtons
        availDay={
          availability[monthIdx].days[getDate(selectedDate) - 1]?.avails || []
        }
      />
    </Formlet>
  )
}
