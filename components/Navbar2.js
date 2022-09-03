
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Pannier from './SVGs/panier';
import Profile from './SVGs/profile';
import LogoNav from './SVGs/logoNav';
import Pan from './SVGs/pan';
import Hamberger from './SVGs/hamberger';

const Navbar = props => {
    return (
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
                        <Link href="#">
                            <a><Hamberger /></a>
                        </Link>
                    </li>
                    <li className={styles.menu__buttons}>
                        <Link href="#">
                            <a className={styles.pannier}>
                                <Pan />
                                <span>Connexion</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}

export default Navbar