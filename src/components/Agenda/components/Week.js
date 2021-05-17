import React, {useState, useEffect} from "react";

import {hours} from '../utils'
import buildAgenda from "../build";
import WeekHeader from './WeekHeader'

export default function Week({date, setDate}) {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);

  return (
    <div className="week">
      <WeekHeader week={week} />
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
  );
}
