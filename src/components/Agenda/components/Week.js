import React, {useState, useEffect} from "react";
import dayjs from 'dayjs'

import {hours} from '../utils'
import buildAgenda from "../build";
import AddEvent from './AddEvent';
import WeekHeader from './WeekHeader'
import Hour from './Hour';
import styles from '../sass/week.module.scss';

export default function Week({date, events, setEvents}) {
  const [show, setShow] = useState(false)
  const [week, setWeek] = useState([]);
  const [title, setTitle] = useState("");
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
  const saveEvent = () => {
    let {start, end} = event;
    start = start.split(':')
    end = end.split(':')
    const newEvent = {
      start: dayjs().startOf('day').hour(start[0]).minute(start[1]),
      end: dayjs().startOf('day').hour(end[0]).minute(end[1]),
      title
    }
    setEvents((events) => [...events, newEvent])
  }
  return (
    <div className={styles.week}>
      <AddEvent changeTime={changeTime} setTitle={setTitle} event={event} show={show} handleSave={saveEvent} handleClose={handleClose} />
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
              <div className={styles.hours}>
                {hours.map((hour) => (
                  <Hour addEvent={addEvent} hour={day.hour(hour)} />
                ))}
              </div>
              <div className={styles.overlayDay}><div>ad</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
