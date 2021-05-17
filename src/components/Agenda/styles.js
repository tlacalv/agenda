import dayjs from 'dayjs'

export function dayStyles(date) {
  return date.startOf('day').isSame(dayjs().startOf('day')) ? 'highlight' : '' 
}