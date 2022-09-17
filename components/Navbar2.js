
import styles from '../styles/Nav2.module.css';
import Link from 'next/link';
import Pannier from './SVGs/panier';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import Pan from './SVGs/Pan2';
import Hamberger from './SVGs/hamberger';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = props => {
    const [view, setView] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const togleView = () => {
        setView(!view);
    }
    const showMenuHandle = () => {
        setShowMenu(!showMenu);
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
                                            <a>Pannier</a>
                                        </Link>
                                        <Link href="/mesCommands">
                                            <a>Shop</a>
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
                    <li className={styles.hamburger} onClick={showMenuHandle}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </nav>
            <AnimatePresence>
                {showMenu &&
                    <motion.menu className={styles.mobile}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn" }}
                    >

                        <div className={styles.close} onClick={showMenuHandle}>&times;</div>
                        <nav>

                            <Link href="/monPannier">
                                <div>Pannier</div>
                            </Link>
                            <Link href="/mesInformations">
                                <div>profile</div>
                            </Link>
                            <Link href="/mesCommandes">
                                <div>Mes Commandes</div>
                            </Link>
                            <Link href="/">
                                <div>shop</div>
                            </Link>
                            <Link href="/contactez"><div>contactez nous</div></Link>
                            <Link href="/quiSommesNous"><div>qui somme nous</div></Link>

                        </nav>
                    </motion.menu>
                }
            </AnimatePresence>
        </menu>
    );
}

export default Navbar