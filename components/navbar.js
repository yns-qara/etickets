
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Shop from './SVGs/Shop';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Login from './Login';
import SignUp from './SignUp';



const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [visibleS, setVisibleS] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setVisible(!visible);
    }
    const toggleSignUp = () => {
        setVisibleS(!visibleS);
    }
    const showMenuHandle = () => {
        setShowMenu(!showMenu);
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
                                Contactez-nous
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
                                <Shop />
                            </Link>
                        </li>
                        <li>
                            <Link href="/mesInformations">
                                <a>

                                    <Profile />
                                </a>
                            </Link>
                        </li>
                        <li className={styles.menu__buttons}>
                            <Link href="#">
                                <a onClick={show}>Connexion</a>
                            </Link>
                            <Link href="#">
                                <a onClick={toggleSignUp}>Inscription</a>
                            </Link>

                        </li>
                        <li className={styles.hamburger} onClick={showMenuHandle}>
                            <div></div>
                            <div></div>
                            <div></div>
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

                            <div onClick={() => { setVisible(!visible); setShowMenu(false) }}>connextion</div>
                            <div onClick={() => { setVisibleS(!visibleS); setShowMenu(false) }}>Inscription</div>
                            <Link href="/mesInformations">
                                <div>profile</div>
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
        </>

    );
}

export default Navbar