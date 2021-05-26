import React from "react";
import styles from "../../sass/event.module.scss";

const eventStyle = (start, end, overlapping, offset) => {
  const startMinutes = start.get("hour") * 60 + start.get("minute");
  const endMinutes = end.get("hour") * 60 + end.get("minute");

  let top = (startMinutes / 1440) * 100;
  let height = (endMinutes / 1440) * 100 - top;
  let left = 100 - 100 / offset;
  return {
    top: `${top}%`,
    height: `${height}%`,
    width: `${100 / overlapping}%`,
    left: `${left}%`,
  };
};

export default function Event({ event }) {
  let { overlapping, offset, start, end } = event;
  return (
    <div
      className={styles.event}
      style={eventStyle(start, end, overlapping, offset)}
    >
      {event.title} {start.format("HH:mm")} - {end.format("HH:mm")}
    </div>
  );
}
