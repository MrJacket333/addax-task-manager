import { createBrowserRouter } from "react-router";
import App from "./App";
import { IndexPage } from "./pages";
import { CalendarPage } from "./pages/calendar";

export default createBrowserRouter([{
  path: '/',
  Component: IndexPage,
  children: [{
    path: 'calendar',
    Component: CalendarPage
  }]
}])