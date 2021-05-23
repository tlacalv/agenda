import React from 'react'
import styles from '../sass/event.module.scss';

const eventStyle = (start, end) => {
  const startMinutes = (start.get('hour')*60) + start.get('minute')
  const endMinutes = (end.get('hour')*60) + end.get('minute')

  let top = (startMinutes/1440)*100;
  let height = ((endMinutes/1440)*100)-top;
  return {
    top: `${top}%`,
    height: `${height}%`
  }
}

export default function Event({event}) {
  return (
    <div className={styles.event} style={eventStyle(event.start, event.end)}>
      {event.title} {event.start.format('HH:mm')} - {event.end.format('HH:mm')}
    </div>
  )
}
