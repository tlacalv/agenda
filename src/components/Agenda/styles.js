import dayjs from 'dayjs'
import styles from './sass/weekheader.module.scss';

export function dayStyles(date) {
  return date.startOf('day').isSame(dayjs().startOf('day')) ? styles.highlight : '' 
}