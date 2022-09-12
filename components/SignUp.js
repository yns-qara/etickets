import Link from "next/link"
import Twitter from './SVGs/twitter'
import Google from './SVGs/Google'
import Facebook from "./SVGs/Facebook"
import styles from '../styles/signup.module.css'
import { motion } from 'framer-motion'
import Eye from "./SVGs/eye"
import { useState } from "react"
const SignUp = props => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    return (

        <motion.form
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "-50%" }}
            transition={{ ease: "easeInOut" }}

            action="" className={styles.form__container}>
            <motion.h1
                initial = {{x : -150}}
                animate = {{x : 0}}
            >
                Nouveau compte
            </motion.h1>
            <div className={styles.name}>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prenom" />
            </div>
            <input className={styles.em} type="email" placeholder="Email" />
            <input className={styles.em} type="tel" placeholder="Téléphone" />
            <div className={styles.pass}>
                <input type={showPassword ? "text" : "password"} placeholder="Mot de passe" />
                <div onClick={togglePassword}>
                    <Eye />
                </div>
            </div>
            <h4>Ou</h4>
            <div className={styles.social__media}>
                <Twitter />
                <Google />
                <Facebook />
            </div>
            <button type="submit">Connexion</button>

            <Link href="#">
                <a className={styles.anchor}> Mot de passe oublie?</a>
            </Link>
        </motion.form>
    );


}


export default SignUp