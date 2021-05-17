import Week from "./components/Week";
import ToolBar from "./components/ToolBar";

export default function Calendar({ date, setDate }) {
  return (
    <div className="agenda">
      <ToolBar date={date} setDate={setDate} />
      <Week date={date} setDate={setDate} />
    </div>
  );
}
