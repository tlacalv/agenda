import Agenda from "./components/Agenda";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useState } from "react";
dayjs.locale("es");

function App() {
  const [date, setDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  return (
    <Agenda
      date={date}
      setDate={setDate}
      events={events}
      setEvents={setEvents}
    />
  );
}

export default App;
