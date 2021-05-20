import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {hours} from '../utils'
import buildAgenda from "../build";
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Content goes here</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
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
