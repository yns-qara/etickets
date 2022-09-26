import styles from '../styles/footer.module.css'
import Envoloppe from './SVGs/envolope'
import LogoT from './SVGs/logoT'
import Apple from './SVGs/apple'
import Android from './SVGs/android'
import Messenger from './SVGs/messenger'
import Watsapp from './SVGs/watsup'
import Twitter from './SVGs/twitter'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className={styles.upper__footer}>
                <h1>Inscrivez-vous à la newsletter Etickets</h1>
                <div className={styles.text_input}>
                    <Envoloppe />
                    <input type="email" className={styles.input} placeholder="email@gmail.com" />
                    <button className={styles.button}>S&apos;INSCRIRE</button>
                </div>
            </div>


            <div className={styles.middle__footer}>

                <div className={styles.left_middle}>
                    <LogoT />
                    <p>Un site de billetterie nouvelle génération vous offrant la possibilité d&apos;acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l&apos;offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d&apos;événements.</p>
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
                        <li> <h1> GUICHET  </h1> </li>
                        <li> <Link href="#"> Concerts & Festivals  </Link> </li>
                        <li> <Link href="#"> Théâtre &  Humour  </Link> </li>
                        <li> <Link href="#"> Formations  </Link> </li>
                        <li> <Link href="#"> Salons et congrès  </Link> </li>
                        <li> <Link href="#"> Famille &  Loisirs  </Link> </li>
                        <li> <Link href="#"> Sport  </Link> </li>
                        <li> <Link href="#"> Cinéma  </Link> </li>
                    </ul>

                    <ul className={styles.right_list}>
                        <li> <h1> À PROPOS </h1> </li>
                        <li>  <Link href="/quiSommesNous"> Qui sommes nous ? </Link> </li>
                        <li>  <Link href="/contactez"> Contactez-nous </Link> </li>
                        <li>  <Link href="#"> Guichet Magazine </Link> </li>
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
        </>
    )
}

export default Footer