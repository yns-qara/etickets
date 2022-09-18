import styles from '../styles/footer.module.css'
import Envoloppe from './SVGs/envolope'
import LogoT from './SVGs/logoT'
import Apple from './SVGs/apple'
import Android from './SVGs/android'
import Messenger from './SVGs/messenger'
import Watsapp from './SVGs/watsup'
import Twitter from './SVGs/twitter'
import Link from 'next/link'

const Footer = props => {
    return (
        <>
            <div className={styles.upper__footer}>
                <h1>Inscrivez-vous à la newsletter Etickets</h1>
                <div className={styles.text_input}>
                    <Envoloppe />
                    <input type="email" className={styles.input} placeholder="email@gmail.com" />
                    <button className={styles.button}>S'INSCRIRE</button>
                </div>
            </div>


            <div className={styles.middle__footer}>

                <div className={styles.left_middle}>
                    <LogoT />
                    <p>Un site de billetterie nouvelle génération vous offrant la possibilité d'acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l'offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d'événements.</p>
                    <h3>NOS APPLICATIONS</h3>
                    <div className={styles.buttonHolder}>
                        <button >
                            <Apple />
                            <span>App Store</span>
                        </button>
                        <button>
                            <Android />
                            <span>Play Store</span>
                        </button>
                    </div>
                </div>
                <div className={styles.right_middle}>
                    <ul className={styles.right_list}>
                        {/* <li> <a><Link href="#"> <h1>GUICHET</h1>  </Link> </a></li> */}
                        {/* <li> <Link href="#"> <a>Concerts &Festivals</a>  </Link> </li>
                        <li> <Link href="#"> <a>Théâtre & Humour</a>  </Link> </li>
                        <li> <Link href="#"> <a>Formations</a>  </Link> </li> */}
                        {/* <li> <Link href="#"> <a>Salons et congrès</a>  </Link> </li>
                        <li> <Link href="#"> <a>Famille & Loisirs</a>  </Link> </li>
                        <li> <Link href="#"> <a>Sport</a>  </Link> </li>
                        <li> <Link href="#"> <a>Cinéma</a>  </Link> </li> */}
                    </ul>

                    <ul className={styles.right_list}>
                        {/* <li> <a><Link href="#"> <h1>À PROPOS</h1> </Link> </a></li>
                        <li> <Link href="/quiSommesNous"> <a>Qui sommes nous ?</a> </Link> </li>
                        <li> <Link href="/contactez"> <a>Contactez-nous</a> </Link> </li>
                        <li> <Link href="#"> <a>Guichet Magazine</a> </Link> </li>
                        <li> <Link href="/mentionsLegals"> <a>Mentions légales</a> </Link> </li> */}
                    </ul>
                </div>
            </div>


            <div className={styles.lower__footer}>
                <h1>Restez à l'écoute:</h1>
                <div className={styles.social_media}>
                    <Messenger />
                    <Watsapp />
                    <Twitter />
                </div>
            </div>
        </>
    )
}

export default Footer