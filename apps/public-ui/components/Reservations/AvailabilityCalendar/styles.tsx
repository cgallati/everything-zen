import styled from "styled-components"

export const CalendarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 267px;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Header = styled.div`
  width: 267px;
  overflow: hidden;
`

const MONTH_WIDTH = 5.6

export const MonthSlider = styled.div<{ offset: number }>`
  display: inline-flex;
  justify-content: center;
  transform: translateX(${({ offset }) => -1 * offset * MONTH_WIDTH + "rem"});
  transition: transform 0.5s;
`

interface SlidingProps {
  current?: Boolean
}

export const MonthName = styled.button<SlidingProps>`
  min-width: ${MONTH_WIDTH}rem;
  color: #00263a;
  background: #fff;
  margin: 0;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.current ? "1" : "0.25")};
  letter-spacing: 2.29px;
  font: normal normal 300 11px/14px Source Sans Pro, sans-serif;
  white-space: nowrap;
  transition: opacity 0.5s;
`

export const WeekHeader = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 228px;
  height: 2.25rem;
  h4 {
    font: normal normal normal 11px/14px Source Sans Pro, sans-serif;
    color: #00263a;
  }
`

export const HR = styled.div`
  width: 14.25rem;
  height: 0;
  margin: auto;
  background: #00263a;
  border-bottom: 0.25px solid #231f20;
  opacity: 0.25;
`

const DAYS_WIDTH = 14.25

export const DaysViewport = styled.div`
  width: ${DAYS_WIDTH}rem;
  overflow: hidden;
`

export const DaysSlider = styled.div<{ offset: number; totalMonths: number }>`
  display: inline-flex;
  justify-content: center;
  transform: translateX(${({ offset }) => -1 * offset * DAYS_WIDTH + "rem"});
  transition: transform 0.5s;
  width: ${({ totalMonths }) => DAYS_WIDTH * totalMonths}rem;
`

export const Days = styled.div<SlidingProps>`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 87%;
  height: 87%;
  opacity: ${(props) => (props.current ? "1" : "0")};
  transition: opacity 1s;
`

interface DayProps {
  selected: boolean
  unavailable: boolean
}

export const Day = styled.button<DayProps>`
  padding: 0.5rem;
  font: normal normal normal 11px/14px Source Sans Pro, sans-serif;
  border: none;
  border-radius: 100%;
  background: ${({ selected }) => (selected ? "#00263a" : "#fff")};
  letter-spacing: 1.06px;
  color: ${({ selected }) => (selected ? "#fff" : "#00263a")};
  width: calc(100% * (1 / 7));
  height: calc(100% * (1 / 7));
  cursor: pointer;
  margin: 0;
  ${({ unavailable }) =>
    unavailable ? "opacity: 0.25;\nfont-weight: 300;\ncursor: auto;\n" : ""}
`
