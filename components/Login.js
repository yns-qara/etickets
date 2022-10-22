import Link from "next/link"
import Twitter from './SVGs/twitter'
import Google from './SVGs/Google'
import Facebook from "./SVGs/Facebook"
import styles from '../styles/login.module.css'
import { motion } from 'framer-motion'
import Eye from "./SVGs/eye"
import EyeOpen from './SVGs/eyeOpen'
import { useState , useContext } from "react"
import { UserContext } from "../context/UserContext"

const Login = ({passedEmail}) => {

    const [logedIn , setLogedIn] = useContext(UserContext)
    
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loged, setLoged] = useState(false);
    const [err, setErr] = useState(false);



    const handleLogIn = async () => {

        try {


            const response = await fetch('http://127.0.0.1:8000/api/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                // credentials: 'same-origin',
                // credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password
                })

            }
            )

            // await window.localStorage.setItem('token',response.data);
            
            setLogedIn(true);
            return response.json();

        } catch (err) {
            setErr(true);
        }

    }

    return (

        <motion.form
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "-50%" }}
            transition={{ ease: "easeInOut" }}
            onSubmit={handleLogIn}
            action="" className={styles.form__container}>

            <h1>Connexion</h1>
            <input
                defaultValue={passedEmail} 
                className={styles.em} type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
            {
                err &&
                <h1>make sure the password and the email are correct</h1>
            }
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


export default Login