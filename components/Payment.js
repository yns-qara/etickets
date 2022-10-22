import styles from '../styles/Payment.module.css'
const Payment = props => {
  return (
    <div className={styles.container}>
        {props.children}
        
    </div>
  )
}


export default Payment