import styles from '../styles/Total.module.css'
import Link from 'next/link'
const Total = props => {
  return (
    <div className={styles.container}>
      <h1>Total</h1>
      <h3>700MAD</h3>
      <h3>—</h3>
      <div className={styles.price__border}>
        <span>Total à payer</span>
        <strong>700MAD</strong>
      </div>
      <input type="radio" name="disc" id="disc" />
      <label htmlFor="disc">
        <Link href="#">
          <span> J’ai lu <a>les conditions générales de ventes et j’accepte</a></span>
          
        </Link>
      </label>
    </div>
  )
}


export default Total