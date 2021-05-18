import React from "react";
import { setToday, previousWeek, nextWeek, getMonth, getYear} from '../utils'
import Icon from '@mdi/react'
import {mdiChevronLeft, mdiChevronRight} from '@mdi/js'

export default function ToolBar({date, setDate}) {
  return (
    <div className="tools">
      <div className="controls">
        <button onClick={() => setToday(setDate)}>Hoy</button>
        <button onClick={() => previousWeek(date, setDate)}><Icon path={mdiChevronLeft} size={1} /></button>
        <button onClick={() => nextWeek(date, setDate)}><Icon path={mdiChevronRight} size={1} /></button>
      </div>
      <div className="month">
        {getMonth(date)} {getYear(date)}
      </div>
    </div>
  );
}
