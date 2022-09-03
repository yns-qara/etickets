import styles from '../styles/marketplace.module.css'
const Marketplace = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Marketplace</h1>
      <p>Reservez votre place pour assister à la Coupe arabe de la
        FIFA Qatar 2021Reservez votre place pour assister </p>
      {props.children}
    </div>
  )
}

export default Marketplace