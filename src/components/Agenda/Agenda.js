import Week from "./components/Week";
import ToolBar from "./components/ToolBar";
import styles from "./sass/agenda.module.scss";

export default function Calendar({ date, setDate, events, setEvents }) {
  return (
    <div className={styles.agenda}>
      <ToolBar date={date} setDate={setDate} />
      <Week
        date={date}
        events={events}
        setEvents={setEvents}
        setDate={setDate}
      />
    </div>
  );
}
