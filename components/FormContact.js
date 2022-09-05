import styles from '../styles/formContact.module.css'
const FormContact = props => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1>Contactez-nous</h1>
            <p>Besoin de nous contacter ? Envoyez votre demande ici ou par E-mail ou via nos sites de communication, nous nous ferons un plaisir de vous contacter.</p>
            <div className={styles.social_media}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={styles.right}>
            <div>
                <input type="text" placeholder='Nom'/>
                <input type="text" placeholder='Prénom'/>
            </div>
            <input type="email" name="" id="" placeholder='Email'/>
            <textarea name="" id="" placeholder='En quoi pouvons-nous vous aider?'></textarea>
        </div>
    </div>
  )
}


export default FormContact