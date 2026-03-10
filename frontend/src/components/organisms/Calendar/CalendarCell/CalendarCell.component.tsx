import { useAddNewTask } from "@molecules/NewTask/NewTask.state";
import { CalendarCellWrapper, CellBody, CellHeader, DayOfMonthLabel, TaskCountLabel } from "./CalendarCell.styles"
import type { CalendarCellProps } from "./CalendarCell.types"

export const CalendarCell = ({ isCurrentDay, cellData }: CalendarCellProps) => {
  const { day, month } = cellData;
  const isCurrentMonth = month === 'current';

  const openNewTaskModal = useAddNewTask((state) => state.showAddNewTaskModal);

  return (<CalendarCellWrapper isCurrentMonth={isCurrentMonth} onClick={openNewTaskModal}>
    <CellHeader isCurrentDay ={isCurrentMonth}>
      <DayOfMonthLabel isCurrentDay={isCurrentDay}>{day.value}</DayOfMonthLabel>
      <TaskCountLabel isCurrentDay={isCurrentDay}>0 tasks</TaskCountLabel>
    </CellHeader>
    <CellBody></CellBody>
  </CalendarCellWrapper>)
}
