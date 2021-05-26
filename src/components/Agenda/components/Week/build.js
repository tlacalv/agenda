export default function buildAgenda(date) {
  const startDay = date.startOf("week");
  const endDay = date.endOf("week");

  const day = startDay
  const week = [];
  let add = 0;
  for (let i= 0; !day.add(add, "day").isAfter(endDay, "day"); i++) {
    week.push(day.add(add, "day"));
    add++
  }
  
  return week;
}