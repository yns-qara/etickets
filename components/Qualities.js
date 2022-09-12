import styles from '../styles/Qualities.module.css'
import Phone from './SVGs/phone'
import Garantie from './SVGs/garantie'
import Ticket from './SVGs/ticket'
import Resell from './SVGs/resell'
const Qualities = props => {
    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
                <div>
                    <Phone />
                    <h2>Support 24/24H</h2>
                    <p>+212 6 45 765 765 / sav@guichet.ma</p>
                </div>
                <div>
                    <Garantie />
                    <h2>Notre garantie 100%</h2>
                    <p>Éliminez les risques et assurez-vous une transaction sécurisée et protégée en faisant affaire avec guichet.com</p>
                </div>
                <div>
                    <Ticket />
                    <h2>Notre garantie 100 %</h2>
                    <p>
                        Achetez des tickets de qualité pour
                        les meilleurs événements en toute sécurité !
                    </p>
                </div>
                <div>
                    <Resell />
                    <h2>Revente de ticket</h2>
                    <p>Achetez des tickets de qualité pour
                        les meilleurs événements en
                        toute sécurité !</p>
                </div>
            </div>

        </div>
    )
}


export default Qualities