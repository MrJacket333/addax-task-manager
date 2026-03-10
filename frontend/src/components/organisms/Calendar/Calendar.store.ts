import { create, type StateCreator } from "zustand";
import zukeeper from 'zukeeper';

type CalendarState = {
  date: {
    year: number;
    month: number;
    monthName: string;
  }

  actions: {
    incrementMonth: () => void;
    decrementMonth: () => void;
  }  
}

const calendarStore: StateCreator<CalendarState> = (set) => ({
  date: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    monthName: new Date().toLocaleString('default', { month: 'long' }),
  },
  actions: {
    incrementMonth: () =>
      set((state) => {
        const nextMonth = state.date.month === 11 ? 0 : state.date.month + 1;
        const nextYear = state.date.month === 11 ? state.date.year + 1 : state.date.year;

        return {
          date: {
            month: nextMonth,
            year: nextYear,
            monthName: new Date(nextYear, nextMonth, 1)
              .toLocaleString('default', { month: 'long' })
          }          
        };
      }),

    decrementMonth: () =>
      set((state) => {
        const prevMonth = state.date.month === 0 ? 11 : state.date.month - 1;
        const prevYear = state.date.month === 0 ? state.date.year - 1 : state.date.year;

        return {
          date: {
            month: prevMonth,
            year: prevYear,
            monthName: new Date(prevYear, prevMonth, 1)
              .toLocaleString('default', { month: 'long' })
          }          
        };
      })
  }  
});

export const useCalendarStore = create<CalendarState>(zukeeper(calendarStore));
