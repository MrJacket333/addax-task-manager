import { CalendarCellWrapper, CellBody, CellHeader, DayOfMonthLabel, TaskCountLabel } from "./CalendarCell.styles"
import type { CalendarCellProps } from "./CalendarCell.types"

export const CalendarCell = ({ isCurrentDay, cellData }: CalendarCellProps) => {
  const { day, month } = cellData;
  const isCurrentMonth = month === 'current';

  return (<CalendarCellWrapper isCurrentMonth={isCurrentMonth}>
    <CellHeader isCurrentDay ={isCurrentMonth}>
      <DayOfMonthLabel isCurrentDay={isCurrentDay}>{day.value}</DayOfMonthLabel>
      <TaskCountLabel isCurrentDay={isCurrentDay}>0 tasks</TaskCountLabel>
    </CellHeader>
    <CellBody></CellBody>
  </CalendarCellWrapper>)
}
