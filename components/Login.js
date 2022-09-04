import Link from "next/link"
import Twitter from './SVGs/twitter'
import styles from '../styles/login.module.css'

const Login = props => {
    return (
        props.triger )? (
        <form action="" className={styles.form__container}>
            <h1>Connexion</h1>
            <input className={styles.em} type="email" placeholder="Email" />
            <input className={styles.pass} type="password" placeholder="Mot de passe" />
            <h4>Ou</h4>
            <div className={styles.social__media}>
                <Twitter />
                <Twitter />
                <Twitter />
            </div>
            <button type="submit">Connexion</button>

            <Link href="#">
                <a className={styles.anchor}> Mot de passe oublie?</a>
            </Link>
        </form>
    ) : "";

     
}


export default Login