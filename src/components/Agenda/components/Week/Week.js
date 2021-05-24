import React, { useState, useEffect } from "react";
import { hours } from "../../utils";
import buildAgenda from "../../build";
import AddEvent from "../AddEvent";
import WeekHeader from "../WeekHeader";
import Hour from "../Hour";
import OverlayDay from "../OverlayDay";
import styles from "../../sass/week.module.scss";

import { getStartEnd, calcOverlapOffset } from "./utils";

export default function Week({ date, events, setEvents }) {
  const [show, setShow] = useState(false);
  const [week, setWeek] = useState([]);
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState({
    start: null,
    end: null,
  });

  useEffect(() => {
    setWeek(buildAgenda(date));
  }, [date]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeTime = (value, event) => {
    setEvent((event) => ({
      ...event,
      ...getStartEnd(value, event),
    }));
  };
  const addEvent = (startHour) => {
    handleShow();
    setEvent((event) => ({
      ...event,
      start: startHour,
      end: startHour.add(1, "hour"),
    }));
  };
  const saveEvent = () => {
    const { start, end } = event;
    let newEvent = {
      start,
      end,
      title,
      overlapping: 1,
      offset: 1,
    };
    setEvents(calcOverlapOffset(newEvent));
    setShow(false);
  };
  return (
    <div className={styles.week}>
      <AddEvent
        changeTime={changeTime}
        setTitle={setTitle}
        event={event}
        show={show}
        handleSave={saveEvent}
        handleClose={handleClose}
      />
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
              <OverlayDay events={events} day={day} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
