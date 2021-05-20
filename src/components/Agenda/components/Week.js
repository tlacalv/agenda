import React, {useState, useEffect} from "react";

import {hours} from '../utils'
import buildAgenda from "../build";
import AddEvent from './AddEvent';
import WeekHeader from './WeekHeader'
import Hour from './Hour';
import styles from '../sass/week.module.scss';

export default function Week({date, setDate}) {
  const [show, setShow] = useState(false)
  const [week, setWeek] = useState([]);
  
  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const addEvent = (startHour) => {
    handleShow();
    console.log(startHour.format("HH:mm:ss a"))
  }
  return (
    <div className={styles.week}>
      <AddEvent show={show} handleClose={handleClose} />
      <WeekHeader week={week} />
      <div className={styles.body}>
        <div className={styles.dates}>
          <div className={styles.dayHours}>
            {hours.map((hour) => (
              <div className={styles.hour}>{hour}:00</div>
            ))}
          </div>
          {week.map((day) => (
            <div className={styles.day}>
              {hours.map((hour) => (
                <Hour addEvent={addEvent} hour={day.hour(hour)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
