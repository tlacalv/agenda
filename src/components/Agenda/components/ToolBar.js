import React from "react";
import { setToday, previousWeek, nextWeek, getMonth, getYear} from '../utils'
export default function ToolBar({date, setDate}) {
  return (
    <div className="tools">
      <div className="controls">
        <button onClick={() => setToday(setDate)}>Hoy</button>
        <button onClick={() => previousWeek(date, setDate)}>{"<"}</button>
        <button onClick={() => nextWeek(date, setDate)}>{">"}</button>
      </div>
      <div className="month">
        {getMonth(date)} {getYear(date)}
      </div>
    </div>
  );
}
