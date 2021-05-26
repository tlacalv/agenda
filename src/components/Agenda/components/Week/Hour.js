import React from "react";
import styles from "../../sass/hour.module.scss";

export default function Hour({ hour, addEvent }) {
  const startHour = hour.startOf("hour");

  return (
    <div className={styles.dayHour} onClick={() => addEvent(startHour)}></div>
  );
}
