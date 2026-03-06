import { useReducer } from "react"
import { useCalendarItems } from "./hooks/useCalendarItems";
import { CalendarContainer, CalendarHeader, CalendarHeaderWrapper, CalendarWrapper, CurrentDateLabel } from "./Calendar.styles";
import { CalendarCell } from "@/components/organisms/Calendar/CalendarCell/CalendarCell.component";
import { CalendarCellHeader } from "@/components/organisms/Calendar/CalendarCellHeader/CalendarCellHeader.component";
import type { CurrentCalendarDate, SwitchCalendarDateAction } from "./Calendar.types";
import { IconButton } from "@/components/atoms/IconButton/IconButton.component";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../SearchInput/SearchInput.component";

const dateStateReducer = (state: CurrentCalendarDate, action: SwitchCalendarDateAction) => {
  switch (action.type) {
  case 'previous':
    return {
      month: state.month === 0 ? 11 : state.month - 1,
      year: state.month === 0 ? state.year - 1 : state.year
    };


  case 'next':
    return {
      month: state.month === 11 ? 0 : state.month + 1,
      year: state.month === 11 ? state.year + 1 : state.year
    };
  }
}

export const CalendarComponent = () => {
  const currentDate = new Date();

  const [dateState, dispatchDate] = useReducer(dateStateReducer, {
    month: currentDate.getMonth(),
    year: currentDate.getFullYear()
  });

  const calendarItems = useCalendarItems(dateState.month, dateState.year);

  const dateLabel = `${new Date(dateState.year, dateState.month).toLocaleString('default', { month: 'long' })} ${dateState.year}`;

  return <CalendarWrapper>
    <CalendarHeader>
      <CalendarHeaderWrapper>
        <IconButton icon={faAngleLeft} onClick={() => dispatchDate({ type: 'previous' })} />
        <CurrentDateLabel>{dateLabel}</CurrentDateLabel>
        <IconButton icon={faAngleRight} onClick={() => dispatchDate({ type: 'next' })} />
      </CalendarHeaderWrapper>
      <SearchInput />
    </CalendarHeader>
    <CalendarContainer>
      <CalendarCellHeader />
      {calendarItems.map((cellData) => (
        <CalendarCell 
          key={`${cellData.day.value}_${cellData.month}`}
          cellData={cellData}
          isCurrentDay={cellData.month === 'current' && cellData.day.value === currentDate.getDate() && dateState.year === currentDate.getFullYear()}
        />
      ))}
    </CalendarContainer>
  </CalendarWrapper>
}
