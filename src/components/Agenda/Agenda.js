import React, { useEffect, useState } from "react";
import buildAgenda from "./build";
import dayjs from 'dayjs'

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const scrollbarWidth = () => {
  // Create the measurement node
  let scrollDiv = document.createElement("div");
  scrollDiv.style.width="100px";
  scrollDiv.style.height="100px";
  scrollDiv.style.overflow="scroll";
  scrollDiv.style.position="absolute";
  scrollDiv.style.top="-9999px";
  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function getMonth(date) {
  return date.format('MMMM')
}
function getYear(date) {
  return date.format('YYYY')
}
function setToday(setDate) {
  setDate(dayjs())
}
function previousWeek(date, setDate) {
  setDate(date.startOf('week').subtract(1, 'week'))
}
function nextWeek(date, setDate) {
  setDate(date.startOf('week').add(1, 'week'))

}
function dayStyles(date) {
  return date.startOf('day').isSame(dayjs().startOf('day')) ? 'highlight' : '' 
}
export default function Calendar({ date, setDate }) {
  const [week, setWeek] = useState([]);
  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);
  console.log(week);
  return (
    <div className="agenda">
      <div className="tools">
        <div className="controls">
          <button onClick={()=>setToday(setDate)}>Hoy</button>
          <button onClick={()=>previousWeek(date, setDate)}>{'<'}</button>
          <button onClick={()=>nextWeek(date, setDate)}>{'>'}</button>
        </div>
        <div className="month">{getMonth(date)} {getYear(date)}</div>
      </div>
      <div className="week">
        <div className="header">
          <div className="space">
          </div>
          {week.length > 0
            ? week.map((day) => (
                <div className={ `day-info ${dayStyles(day)} `}>
                  <div className="day-name">
                    {day.format("ddd").toUpperCase()}
                  </div>
                  <div className="day-number">{day.format("DD")}</div>
                </div>
              ))
            : null}
            <div className="scroll-space" style={{ minWidth: `${scrollbarWidth()}px`}}></div>
        </div>
        <div className="body">
          <div className="dates">
            <div className="day-hours">
              {hours.map((hour) => (
                <div className="hour">{hour}:00</div>
              ))}
            </div>
            {week.map((day) => (
              <div className="day">
                {hours.map((hour) => (
                  <div className="day-hour"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
