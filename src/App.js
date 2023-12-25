import "./styles.css";
import City from "./City.js";
import DayMonthTime from "./DayMonthTime";
import Search from "./Search";
import WeekdayHeadings from "./WeekdayHeadings";
import WeekdayTemps from "./WeekdayTemps";
import Netlify from "./Netlify";
import Github from "./Github";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <City />
        <Search />
        <DayMonthTime />
        <WeekdayHeadings />
        <WeekdayTemps />
      </div>
      <Netlify />
      <Github />
    </div>
  );
}
