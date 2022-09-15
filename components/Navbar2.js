
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Pannier from './SVGs/panier';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import Pan from './SVGs/Pan2';
import Hamberger from './SVGs/hamberger';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = props => {
    const [view, setView] = useState(false)
    const togleView = () => {
        setView(!view);
    }
    return (
        <menu className={styles.navmenu}>
            <nav className={styles.menu__container}>
                <ul className={styles.menu__left}>
                    <li>
                        <Link href="/">
                            <a><LogoNav /></a>
                        </Link>
                    </li>
                    <li className={styles.hide}>
                        <Link href="/contactez">
                            <a>Contactez-nous</a>
                        </Link>
                    </li>
                    <li className={styles.hide}>
                        <Link href="/quiSommesNous">
                            <a href="#">Qui nous sommes?</a>
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
                        <div className={styles.popupParent}>
                            <div onClick={togleView}>
                                <Hamberger />
                            </div>
                            <AnimatePresence>
                                {
                                    view &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: .3 }}
                                        exit={{ opacity: 0 }}
                                        className={styles.popup}>
                                        <div className={styles.profile}>
                                            <img src="" alt="" />
                                            <span>Profile</span>
                                        </div>
                                        <Link href="/mesCommands">
                                            <a>Mes commandes</a>
                                        </Link>
                                        <Link href="/mesCommands">
                                            <a>Mes commandes</a>
                                        </Link>
                                        <Link href="/mesCommands">
                                            <a>Mes commandes</a>
                                        </Link>

                                    </motion.div>
                                }
                            </AnimatePresence>

                        </div>
                    </li>
                    <li className={styles.menu__buttons}>
                        <Link href="/monPanier">
                            <a className={styles.pannier}>
                                <Pan />
                                <span>PANIER</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}

export default Navbar