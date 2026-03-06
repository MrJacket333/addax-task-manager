import type { CalendarItemProps } from "../CalendarCell/CalendarCell.types";

export type CalendarData = {
  currentMonth: number;
  previousMonth: number;
  nextMonth: number;
  calendarItems: CalendarItemProps[];
}