import styles from '../styles/Codepromo.module.css'
const Codepromo = props => {
  return (
    <div className={styles.container}>
      <h1>Code promotionnel</h1>
      <div className={styles.entries}>
        <input type="text" placeholder='Entrer le code'/>
        <button>VALIDER</button>
      </div>
    </div>
  )
}


export default Codepromo