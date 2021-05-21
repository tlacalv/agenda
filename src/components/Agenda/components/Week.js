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
  const [event, setEvent] = useState({
    start: null,
    end: null,
  })
  
  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const changeTime = (value) =>{
    console.log(event)
    setEvent(event=> ({
      ...event,
      start: value[0],
      end: value[1]
    }))
  }
  const addEvent = (startHour) => {
    handleShow();
    setEvent(event=>({
      ...event,
      start: startHour.format('HH:mm'),
      end: startHour.add(1, 'hour').format('HH:mm')
    }))
  }
  return (
    <div className={styles.week}>
      <AddEvent changeTime={changeTime} event={event} show={show} handleClose={handleClose} />
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
