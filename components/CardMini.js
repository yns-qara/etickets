import styles from '../styles/cardMini.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountDownDL from '../components/CountDownDL';


// todo : add dynamique title , date , genra ...
// todo : add sold out logic from the counter

const CardMini = ({ imgURL }) => {

    const month = 12;
    const day = 1;


    return (
        <motion.div
            initial={{ opacity: 0 , x: -50}}
            animate={{ opacity: 1, x: 0 }}
            className={styles.card__container}>

            <div className={styles.card__container}>

                <div className={styles.card__upper}>
                    <Image src={imgURL} width={323} height={155} alt="MiniCard" />
                    <div>sport</div>
                </div>


                <div className={styles.card__lower}>
                    <div className={styles.card__lower_left}>
                        <h1>MARVEL Avangers</h1>
                        <div className={styles.dead_line}>Sumedi 30 Aout 2022 - 16:45</div>
                        <div className={styles.location_city}>
                            <strong>Marrakech,</strong> Cinéma megarama
                        </div>
                        <div className={styles.counter}>
                            <CountDownDL  name="younes" month={month} day={day} />
                        </div>
                    </div>
                    <div className={styles.card__lower_right}>
                        <div className={styles.card__price_item}>
                            <span>À partir de :</span>
                            <div>200MAD</div>
                        </div>
                    </div>
                </div>
                <a className={styles.card__button} href="#">J’achéte</a>
            </div>
        </motion.div>
    )
}


export default CardMini