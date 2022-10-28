import styles from '../styles/footer.module.css'
import Envoloppe from './SVGs/envolope'
import LogoT from './SVGs/logoT'
import Apple from './SVGs/apple'
import Android from './SVGs/android'
import Messenger from './SVGs/messenger'
import Watsapp from './SVGs/watsup'
import Twitter from './SVGs/twitter'
import Link from 'next/link'
import CommingSoon from './CommingSoon'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { motion } from 'framer-motion'

const Footer = () => {
    const [active, setActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [activateLogin, setActivateLogin] = useState(false);
    const [passedEmail, setPassedEmail] = useState("");

    const handleFocus = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className={styles.upper__footer}>
                <h1>Inscrivez-vous à la newsletter Etickets</h1>
                <div className={toggle ? styles.text_input_focus : styles.text_input}>
                    <Envoloppe />
                    <input
                        onChange={(e) => setPassedEmail(e.target.value)}
                        onFocus={handleFocus}
                        type="email"
                        className={styles.input}
                        placeholder="email@gmail.com" />
                    <button
                        // 
                        onClick={() => setActivateLogin(true)}
                        className={styles.button}>S&apos;INSCRIRE</button>
                </div>
            </div>


            <div className={styles.middle__footer}>

                <div className={styles.left_middle}>
                    <LogoT />
                    <p>Un site de billetterie nouvelle génération vous offrant la possibilité d&apos;acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l&apos;offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d&apos;événements.</p>
                    <h3>NOS APPLICATIONS</h3>
                    <div className={styles.buttonHolder}>
                        <button onClick={() => setActive(true)}>
                            <Apple />
                            <span>App Store</span>
                        </button>
                        <button onClick={() => setActive(true)}>
                            <Android />
                            <span>Play Store</span>
                        </button>
                        {
                            active && <CommingSoon setActive={setActive} title="this page is under construction" />
                        }
                    </div>
                </div>
                <div className={styles.right_middle}>
                    <ul className={styles.right_list}>
                        <li> <h1> GUICHET  </h1> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Concerts & Festivals  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Théâtre &  Humour  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Formations  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Salons et congrès  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Famille &  Loisirs  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Sport  </Link> </li>
                        <li onClick={() => setActive(true)}> <Link href="#"> Cinéma  </Link> </li>
                    </ul>

                    <ul className={styles.right_list}>
                        <li> <h1> À PROPOS </h1> </li>
                        <li>  <Link href="/quiSommesNous"> Qui sommes nous ? </Link> </li>
                        <li>  <Link href="/contactez"> Contactez-nous </Link> </li>
                        <li onClick={() => setActive(true)}>  <Link href="#"> Guichet Magazine </Link> </li>
                        <li>  <Link href="/mentionsLegals"> Mentions légales </Link> </li>
                    </ul>
                </div>
            </div>


            <div className={styles.lower__footer}>
                <h1>Restez à l&apos;écoute:</h1>
                <div className={styles.social_media}>
                    <Messenger />
                    <Watsapp />
                    <Twitter />
                </div>
            </div>


            {
                activateLogin &&
                <>
                    {/* <Login passedEmail={passedEmail} /> */}
                    <SignUp passedEmail={passedEmail} />
                    <motion.div
                        onClick={() => setActivateLogin(false)}
                        className={styles.wrapper}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        exit={{ x: 200 }}
                    ></motion.div>
                </>
            }
        </>
    )
}

export default Footer