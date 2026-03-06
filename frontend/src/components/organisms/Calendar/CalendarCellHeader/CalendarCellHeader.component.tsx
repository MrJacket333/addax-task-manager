import { Fragment } from "react/jsx-runtime"
import { HeaderCell } from "./CalendarCellHeader.styles"
import { DAYS_OF_WEEK } from "@/config/constants"

export const CalendarCellHeader = () => {
  return <Fragment>
    {DAYS_OF_WEEK.map(day => (<HeaderCell>{day}</HeaderCell>))}
  </Fragment>
}