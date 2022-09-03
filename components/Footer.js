import styles from '../styles/footer.module.css'
import Envoloppe from './SVGs/envolope'
import Logo from './SVGs/logo'
import Apple from './SVGs/apple'
import Android from './SVGs/android'
import Messenger from './SVGs/messenger'
import Watsapp from './SVGs/watsup'
import Twitter from './SVGs/twitter'


const Footer = props => {
    return (
        <>
            <div className={styles.upper__footer}>
                <h1>Inscrivez-vous à la newsletter Etickets</h1>
                <div className={styles.text_input}>
                    <Envoloppe />
                    <input type="email" className={styles.input} placeholder="email@gmail.com" />
                    <button className={styles.button}>S’INSCRIRE</button>
                </div>
            </div>


            <div className={styles.middle__footer}>

                <div className={styles.left_middle}>
                    <Logo />
                    <p>Un site de billetterie nouvelle génération vous offrant la possibilité d’acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l’offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d’événements.</p>
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
                        <li><a href="#"><h1>GUICHET</h1></a></li>
                        <li><a href="#">Concerts &Festivals</a></li>
                        <li><a href="#">Théâtre & Humour</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#">Salons et congrès</a></li>
                        <li><a href="#">Famille & Loisirs</a></li>
                        <li><a href="#">Sport</a></li>
                        <li><a href="#">Cinéma</a></li>
                    </ul>

                    <ul className={styles.right_list}>
                        <li><a href="#"><h1>À PROPOS</h1></a></li>
                        <li><a href="#">Qui sommes nous ?</a></li>
                        <li><a href="#">Contactez-nous</a></li>
                        <li><a href="#">Guichet Magazine</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>
            </div>


            <div className={styles.lower__footer}>
                <h1>Restez à l’écoute:</h1>
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