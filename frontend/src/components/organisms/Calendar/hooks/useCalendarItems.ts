import { useMemo } from "react";
import type { CalendarCell } from "../CalendarCell/CalendarCell.types";
import { DAYS_OF_WEEK } from "@/config/constants";

export const useCalendarItems = (currentMonth: number, currentYear: number): CalendarCell[] => {

  const calendarItems = useMemo(() => {
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentYear, previousMonth + 1, 0).getDate();

    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 0).getDay() + 1;

    return new Array(42).fill(null).map((_, index) => {
      const isPreviousMonth = index < firstDayOfCurrentMonth;
      const isNextMonth = index >= firstDayOfCurrentMonth + daysInCurrentMonth;
      const month = isPreviousMonth ? 'previous' : isNextMonth ? 'next' : 'current';
      const day = isPreviousMonth ? daysInPreviousMonth - (firstDayOfCurrentMonth - index - 1) :
        isNextMonth ? index - (firstDayOfCurrentMonth + daysInCurrentMonth) :
          index - firstDayOfCurrentMonth + 1;
      return { day: {
        value: day,
        shortName: DAYS_OF_WEEK[day],
      }, month } as CalendarCell;
    });
  }, [currentMonth, currentYear]);

  return calendarItems;
}