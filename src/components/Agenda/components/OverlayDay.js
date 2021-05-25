import React from "react";
import styles from "../sass/week.module.scss";
import Event from "./Event";
import dayjs from "dayjs";

const OverlayDay = ({ events, day }) => {
  return (
    <div className={styles.overlayDay}>
      {events.map((event) => {
        let { start, end } = event;
        start = dayjs(start);
        end = dayjs(end);

        if (start.startOf("day").isSame(day))
          return <Event event={{ ...event, start, end }} />;
        return null;
      })}
    </div>
  );
};

export default OverlayDay;
