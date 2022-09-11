
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Pannier from './SVGs/panier';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Login from './Login';
import SignUp from './SignUp';


const Navbar = props => {
    const [visible, setVisible] = useState(false);
    const [visibleS, setVisibleS] = useState(false)

    const show = () => {
        setVisible(!visible);
    }
    const toggleSignUp = () => {
        setVisibleS(!visibleS);
    }

    return (

        <>

            <menu className={styles.navmenu}>
                <nav className={styles.menu__container}>
                    <ul className={styles.menu__left}>
                        <li className="logo">
                            <Link href="/">
                                <a><LogoNav /></a>
                            </Link>
                        </li>
                        <li className={styles.disapear}>

                            <Link href="/contactez">
                                <a >Contactez-nous</a>
                            </Link>
                        </li>
                        <li className={styles.disapear}>
                            <Link href="/quiSommesNous">
                                <a >Qui nous sommes?</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.menu__right}>
                        <li>
                            <Link href="#">
                                <a><Pannier /></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/mesInformations">
                                <a><Profile /></a>
                            </Link>
                        </li>
                        <li className={styles.menu__buttons}>
                            <Link href="#">
                                <a onClick={show}>Connexion</a>
                            </Link>
                            <Link href="#">
                                <a onClick={toggleSignUp}>Inscription</a>
                            </Link>

                            {/* <div className={styles.ex}>&times;</div> */}
                        </li>
                    </ul>
                </nav>
            </menu>
                {
                    visible &&
                    <div>
                        <Login />
                        <motion.div
                            onClick={show}
                            className={styles.wrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}

                            exit={{ x: 200 }}
                        >



                        </motion.div>
                    </div>
                }

                {
                    visibleS &&
                    <div>
                        <SignUp />
                        <motion.div
                            onClick={toggleSignUp}
                            className={styles.wrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}

                            exit={{ x: 200 }}
                        >



                        </motion.div>
                    </div>
                }


            {/* <menu className={styles.mobile}>
                <nav>

                </nav>
            </menu> */}
        </>

    );
}

export default Navbar