import React, { useEffect, useState } from "react";
import buildAgenda from "./build";

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
export default function Calendar({ date, setDate }) {
  const [week, setWeek] = useState([]);
  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);
  console.log(week);
  return (
    <div className="agenda">
      <div className="tools">wergrfzfdgfd</div>
      <div className="week">
        <div className="header">
          <div className="space">
          </div>
          {week.length > 0
            ? week.map((day) => (
                <div className="day-info">
                  <div className="day-name">
                    {day.format("ddd").toUpperCase()}
                  </div>
                  <div className="day-number">{day.format("DD")}</div>
                </div>
              ))
            : null}
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
