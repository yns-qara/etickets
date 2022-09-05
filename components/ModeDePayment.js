import styles from '../styles/ModeDePayment.module.css'
const ModeDePayment = props => {
  return (
    <div className={styles.container}>

      <h1>Mode de paiement</h1>
      <h4>Sélectionez votre moyen de paiement</h4>

      <div className={styles.payment}>
        <input type="radio" name="cb" id={styles.cb} />
        <label htmlFor="cb">Carte bancaire</label>

        <p id={styles.f_option}>Vous allez procéder à un paiement sécurisé d’un montant de 200,00 MAD à la caisse.Vous serez redirigé sur le site de notre partenaire NAPS.</p>
        <br />

        <input type="radio" name="cb" id={styles.vir} />
        <label htmlFor="vir">Virement / Versement</label>
        <p id={styles.s_option}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi veniam porro quaerat, debitis architecto libero molestiae saepe nesciunt nostrum?</p>
        <br />

        <input type="radio" name="cb" id={styles.cashplus} />
        <label htmlFor="cashplus">Cashplus</label>
        <p id={styles.t_option}>blablablablalablablablalablablablalablablablalablablablalablablablalablablablalablablabla</p>
        <br />
      </div>
    </div>
  )
}


export default ModeDePayment