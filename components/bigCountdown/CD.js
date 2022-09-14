// import styles from '../styles/CD.module.css'
import styles from '../../styles/CD.module.css'
import SvgHour from '../../components/SVGs/bigHour'


const Countdown = ({ countdownData, name }) => {
  return (
      <div className={styles.counter}>
        <SvgHour />
        <span>
          <span className={styles.counter_j} id={styles.change_c}>{countdownData.days}</span><span>j</span>
          <span className={styles.counter_h} id={styles.change_c}>{countdownData.hours}</span><span>h</span>
          <span className={styles.counter_m} id={styles.change_c}>{countdownData.minutes}</span><span>m</span>
          <span className={styles.counter_s} id={styles.change_c}>{countdownData.seconds}</span><span>s</span>
        </span>
      </div>
  );
};

export default Countdown;
