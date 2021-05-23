import React, {useState, useEffect} from "react";
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
  const changeTime = (value, event) =>{
    const [firstHour, secondHour] = value;
    const first = firstHour.split(':')
    const second = secondHour.split(':')
    const date = event.start;
    setEvent(event=> ({
      ...event,
      start: date.hour(first[0]).minute(first[1]),
      end: date.hour(second[0]).minute(second[1])
    }))
  }
  const addEvent = (startHour) => {
    handleShow();
    setEvent(event=>({
      ...event,
      start: startHour,
      end: startHour.add(1, 'hour')
    }))
  }
  const saveEvent = () => {
    const {start, end} = event;
    const newEvent = {
      start,
      end,
      title
    }
    setEvents((events) => [...events, newEvent])
    setShow(false)
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
              <div className={styles.overlayDay}>
                {events.map(item => {
                  const {start} = item;
                  console.log(start.get('date'))
                  if(start.startOf('day').isSame(day)) return item.title
                  return null
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
