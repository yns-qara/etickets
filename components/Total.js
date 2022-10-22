import styles from '../styles/Total.module.css'
const Total = () => {
  return (
    <div className={styles.container}>
      <h1>Total</h1>
      <h3>700MAD</h3>
      <h3>—</h3>
      <div className={styles.price__border}>
        <span>Total à payer</span>
        <strong>700MAD</strong>
      </div>
     
    </div>
  )
}


export default Total