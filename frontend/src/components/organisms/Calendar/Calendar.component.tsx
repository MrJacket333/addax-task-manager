import { useCalendarItems } from "./hooks/useCalendarItems";
import { CalendarContainer, CalendarHeader, CalendarHeaderWrapper, CalendarWrapper, CurrentDateLabel } from "./Calendar.styles";
import { CalendarCell } from "@organisms/Calendar/CalendarCell/CalendarCell.component";
import { CalendarCellHeader } from "@organisms/Calendar/CalendarCellHeader/CalendarCellHeader.component";
import { IconButton } from "@atoms/IconButton/IconButton.component";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../SearchInput/SearchInput.component";
import { NewTaskModal } from "@molecules/NewTask/NewTaskModal.component";
import { useCalendarStore } from "./Calendar.store";


export const CalendarComponent = () => {

  const currentDate = new Date();

  const { year, monthName } = useCalendarStore((state) => state.date);

  const actions = useCalendarStore((state) => state.actions);

  const calendarItems = useCalendarItems();

  return <CalendarWrapper>
    <CalendarHeader>
      <CalendarHeaderWrapper>
        <IconButton icon={faAngleLeft} onClick={() => actions.decrementMonth()} />
        <CurrentDateLabel>{`${monthName} ${year}`}</CurrentDateLabel>
        <IconButton icon={faAngleRight} onClick={() => actions.incrementMonth()} />
      </CalendarHeaderWrapper>
      <SearchInput />
    </CalendarHeader>
    <CalendarContainer>
      <CalendarCellHeader />
      {calendarItems.map((cellData) => (
        <CalendarCell 
          key={`${cellData.day.value}_${cellData.month}`}
          cellData={cellData}
          isCurrentDay={cellData.month === 'current' && cellData.day.value === currentDate.getDate() && year === currentDate.getFullYear()}
        />
      ))}
    </CalendarContainer>
    <NewTaskModal />
  </CalendarWrapper>
}
