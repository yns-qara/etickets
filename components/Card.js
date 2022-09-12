import Link from 'next/link'
import styles from '../styles/card.module.css'
import { motion, AnimatePresence } from 'framer-motion'

import SvgHour from '../components/SVGs/hour'
// import Countdown from './Countdown'
import CountDownDL from '../components/CountDownDL';

const Card = ({ imgURL, title, genre, date, city, lieu, month, day, price, sold, reserved }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .4 }}

            className={styles.card__container}

        >

            <div className={styles.card__upper}>
                <img src={imgURL} alt="" />
                <div>{genre}</div>
            </div>


            <div className={styles.card__lower}>
                <div className={styles.card__lower_left}>
                    <h1>{title}</h1>
                    <div className={styles.dead_line}>{date}</div>
                    <div className={styles.location_city}>
                        <strong>{city},</strong> <span>{lieu}</span>
                    </div>


                    <CountDownDL name="younes" month={month} day={day} />


                </div>
                <div className={styles.card__lower_right}>
                    <img src="/goldLogo.png" alt="" />
                    <div className={styles.card__price_item}>
                        <span>À partir de :</span>
                        <div>{price} <span>MAD</span></div>
                    </div>
                </div>
            </div>
            <Link href="/jachete">
                <a className={styles.card__button}>
                    {/* {
                        sold ? "SOLD" : "J’achéte"
                    } */}

                    J’achéte

                </a>
            </Link>
        </motion.div>

    )
}


export default Card