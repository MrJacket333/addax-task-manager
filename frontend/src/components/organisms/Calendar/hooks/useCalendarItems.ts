import { useMemo } from "react";
import type { CalendarCell } from "../CalendarCell/CalendarCell.types";
import { DAYS_OF_WEEK } from "@/config/constants";
import { useCalendarStore } from "../Calendar.store";

export const useCalendarItems = (): CalendarCell[] => {

  const { month: currentMonth, year: currentYear } = useCalendarStore((state) => state.date);

  const calendarItems = useMemo(() => {
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentYear, previousMonth + 1, 0).getDate();

    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 0).getDay() + 1;

    return new Array(42).fill(null).map((_, index) => {
      const isPreviousMonth = index < firstDayOfCurrentMonth;
      const isNextMonth = index >= firstDayOfCurrentMonth + daysInCurrentMonth;
      const month = isPreviousMonth ? 'previous' : isNextMonth ? 'next' : 'current';
      const dayNumber = index + 1;
      const day = isPreviousMonth ? daysInPreviousMonth - (firstDayOfCurrentMonth - dayNumber) :
        isNextMonth ? dayNumber - (firstDayOfCurrentMonth + daysInCurrentMonth) :
          dayNumber - firstDayOfCurrentMonth;
      return { day: {
        value: day,
        shortName: DAYS_OF_WEEK[day],
      }, month } as CalendarCell;
    });
  }, [currentMonth, currentYear]);

  return calendarItems;
}