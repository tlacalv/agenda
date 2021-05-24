import React from "react";
import styles from "../sass/week.module.scss";
import Event from "./Event";

const OverlayDay = ({ events, day }) => {
  return (
    <div className={styles.overlayDay}>
      {events.map((event) => {
        const { start, end } = event;

        if (start.startOf("day").isSame(day)) return <Event event={event} />;
        return null;
      })}
    </div>
  );
};

export default OverlayDay;
