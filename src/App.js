import Agenda from './components/Agenda'
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {useState} from 'react';
dayjs.locale('es')

function App() {
  const [date, setDate] = useState(dayjs())
  return (
    <Agenda date={date} setDate={setDate} />   
  );
}

export default App;
