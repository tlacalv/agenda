import { scrollbarWidth } from "../../utils";
import { dayStyles } from "../../styles";
import React from "react";
import styles from "../../sass/weekheader.module.scss";

export default function WeekHeader({ week }) {
  return (
    <div className={styles.header}>
      <div className={styles.space}></div>
      {week.length > 0
        ? week.map((day) => (
            <div className={`${styles.dayInfo} ${dayStyles(day)} `}>
              <div className={styles.dayName}>
                {day.format("ddd").toUpperCase()}
              </div>
              <div className={styles.dayNumber}>{day.format("DD")}</div>
            </div>
          ))
        : null}
      <div
        className={styles.scrollSpace}
        style={{ minWidth: `${scrollbarWidth()}px` }}
      ></div>
    </div>
  );
}
