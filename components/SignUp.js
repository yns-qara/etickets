import Link from "next/link"
import Twitter from './SVGs/twitter'
import Google from './SVGs/Google'
import Facebook from "./SVGs/Facebook"
import styles from '../styles/signup.module.css'
import { motion } from 'framer-motion'
import { useState } from "react"
import Eye from "./SVGs/eye"
import EyeOpen from './SVGs/eyeOpen'


const SignUp = ({passedEmail}) => {


    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }


    const [nom, setNom] = useState('younes');
    const [prenom, setPrenom] = useState('qara');
    const [tele, setTele] = useState('0679072113');
    const [email, setEmail] = useState('b@gmail.com');
    const [password, setPassword] = useState('testtest');




    const handleSignUp = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: nom,
                lastName: prenom,
                telephone: tele,
                email: email,
                password: password
            })
        });
        return response.json();
    }




    return (


        <motion.form
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "-50%" }}
            transition={{ ease: "easeInOut" }}
            action=""
            onSubmit={handleSignUp}
            className={styles.form__container}
        >

            <h1>Nouveau compte</h1>
            <div className={styles.name}>
                <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) => setNom(e.target.value)}
                    required />
                <input
                    type="text"
                    placeholder="Prenom"
                    onChange={(e) => setPrenom(e.target.value)}
                    required />
            </div>
            <input
                className={styles.em}
                defaultValue={passedEmail} 
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required />
            <input
                className={styles.em}
                type="tel"
                placeholder="Téléphone"
                onChange={(e) => setTele(e.target.value)}
                required />
            <div className={styles.pass}>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <div onClick={togglePassword}>
                    {showPassword ? <EyeOpen /> : <Eye />}
                </div>
            </div>
            <button type="submit">Connexion</button>
            <h4>{confirm}</h4>
            <h4>Ou</h4>
            <div className={styles.social__media}>
                <Twitter />
                <Google />
                <Facebook />
            </div>

            <Link href="#">
                <a className={styles.anchor}> Mot de passe oublie?</a>
            </Link>
        </motion.form>

    );


}


export default SignUp