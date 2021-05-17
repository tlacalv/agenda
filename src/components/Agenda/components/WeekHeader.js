import {scrollbarWidth} from '../utils'
import {dayStyles} from '../styles'
import React from "react";

export default function WeekHeader({week}) {
  return (
    <div className="header">
      <div className="space"></div>
      {week.length > 0
        ? week.map((day) => (
            <div className={`day-info ${dayStyles(day)} `}>
              <div className="day-name">{day.format("ddd").toUpperCase()}</div>
              <div className="day-number">{day.format("DD")}</div>
            </div>
          ))
        : null}
      <div
        className="scroll-space"
        style={{ minWidth: `${scrollbarWidth()}px` }}
      ></div>
    </div>
  );
}
