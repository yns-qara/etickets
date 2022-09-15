import styles from '../styles/Total.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Total = props => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.container}>
      <h1>Total</h1>
      <h3>700MAD</h3>
      <h3>—</h3>
      <div className={styles.price__border}>
        <span>Total à payer</span>
        <strong>700MAD</strong>
      </div>
      <div className={styles.inpt}>
        {/* <input type="radio" name="disc" id="disc" /> */}
        <div className={styles.circle}
        
          onClick={ () => setVisible(!visible)}
        >

          {visible && 
          <div className={styles.inner_circle}></div>
          }
        </div>
        <label htmlFor="disc">
          <Link href="#">
            <span> J’ai lu <a>les conditions générales de ventes et j’accepte</a></span>
          </Link>
        </label>

      </div>
    </div>
  )
}


export default Total