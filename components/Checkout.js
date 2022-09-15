import styles from '../styles/checkout.module.css'
const Checkout = props => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}


export default Checkout