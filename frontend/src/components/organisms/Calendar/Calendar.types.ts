export type CurrentCalendarDate = {
  month: number;
  year: number;
};

export type SwitchCalendarDateAction = {
  type: 'previous' | 'next';
}