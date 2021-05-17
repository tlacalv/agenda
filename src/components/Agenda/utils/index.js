import dayjs from 'dayjs';

export function getMonth(date) {
  return date.format('MMMM')
}
export function getYear(date) {
  return date.format('YYYY')
}
export function setToday(setDate) {
  setDate(dayjs())
}
export function previousWeek(date, setDate) {
  setDate(date.startOf('week').subtract(1, 'week'))
}
export function nextWeek(date, setDate) {
  setDate(date.startOf('week').add(1, 'week'))

}
export const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
export const scrollbarWidth = () => {
  // Create the measurement node
  let scrollDiv = document.createElement("div");
  scrollDiv.style.width="100px";
  scrollDiv.style.height="100px";
  scrollDiv.style.overflow="scroll";
  scrollDiv.style.position="absolute";
  scrollDiv.style.top="-9999px";
  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}