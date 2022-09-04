
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Pannier from './SVGs/panier';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import Popup from 'reactjs-popup';

const Navbar = props => {


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
                        <li>
                            <Link href="#">
                                <a>Contactez-nous</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
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
                            <Link href="/mesInformations">
                                <a><Profile /></a>
                            </Link>
                        </li>
                        <li className={styles.menu__buttons}>
                            <Link href="#">
                        
                                <a>Connexion</a>
                            </Link>
                            <Link href="#">
                                <a>Inscription</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </menu>
        </>

    );
}

export default Navbar