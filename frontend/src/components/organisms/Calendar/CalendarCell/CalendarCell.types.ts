type Month = 'current' | 'previous' | 'next';

type Day = {
    value: number;
    shortName: string;
}

export type CalendarCell = {
    day: Day,
    month: Month;
}

export type CalendarCellProps = React.PropsWithChildren & {
    cellData: CalendarCell;
    isCurrentDay: boolean;
}