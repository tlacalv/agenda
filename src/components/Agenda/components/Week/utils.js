import dayjs from "dayjs";

export const getStartEnd = (value, event) => {
  const [firstHour, secondHour] = value;
  const first = firstHour.split(":");
  const second = secondHour.split(":");
  const date = dayjs(event.start);
  return {
    start: date.hour(first[0]).minute(first[1]).valueOf(),
    end: date.hour(second[0]).minute(second[1]).valueOf(),
  };
};
//returns a function that iterates events in state and sets overlappings and offsets
export const calcOverlapOffset = (newEvent) => (events) => {
  let newEvents = events.map((ev, i) => {
    //miliseconds value of start and end of new event
    let { start, end } = newEvent;
    start = start.valueOf();
    end = end.valueOf();

    //miliseconds value of start and end of current iteration event from state
    let { start: prevStart, end: prevEnd } = ev;
    prevStart = prevStart.valueOf();
    prevEnd = prevEnd.valueOf();

    //IF checks for overlapping comparing the new event with the current iteration event
    if (
      prevStart === start ||
      prevEnd === end ||
      (prevStart > start && prevStart < end) ||
      (prevEnd > start && prevEnd < end) ||
      (prevStart < start && prevEnd > end)
    ) {
      newEvent = {
        ...newEvent,
        overlapping: newEvent.overlapping + 1,
      };
      const { offset: currOffset } = ev;
      const { offset } = newEvent;
      //IF checks the value of the new event offset and compares it with the current iteration event
      if (currOffset === offset) {
        newEvent = {
          ...newEvent,
          offset: offset + 1,
        };
      } else if (offset < currOffset) {
        newEvent = {
          ...newEvent,
          offset: currOffset + 1,
        };
      }
      return {
        ...ev,
        overlapping: ev.overlapping + 1,
      };
    }
    return ev;
  });
  return [...newEvents, newEvent];
};
