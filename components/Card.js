import Link from 'next/link'
import styles from '../styles/card.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CountDownDL from '../components/CountDownDL';
import { useState } from 'react';
const Card = ({ imgURL, title, genre, date, city, lieu, month, day, price, sold, reserved, link }) => {
    const [dateExpired, setDateExpired] = useState(false)
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
                <Image src={imgURL} width={370} height={177} alt="card" />
                <div>{genre}</div>
            </div>


            <div className={styles.card__lower}>
                <div className={styles.card__lower_left}>
                    <h1>{title}</h1>
                    <div className={styles.dead_line}>{date}</div>
                    <div className={styles.location_city}>
                        <strong>{city},</strong> <span>{lieu}</span>
                    </div>


                    <CountDownDL dateExpired={dateExpired} setDateExpired={setDateExpired} name="younes" month={month} day={day} />


                </div>
                <div className={styles.card__lower_right}>
                    <Image src="/goldLogo.png" width={68} height={13} alt="logo" />
                    <div className={styles.card__price_item}>
                        <span>À partir de :</span>
                        <div>{price} <span>MAD</span></div>
                    </div>
                </div>
            </div>

            {
                dateExpired ?

                    <a className={styles.card__button_sold}>SOLD</a>

                    :
                    <Link href={link}>
                        <a className={styles.card__button}>
                            J&apos;achéte
                        </a>
                    </Link>
            }
            {/* <Link href={link} >
                <a className={dateExpired ? styles.card__button_sold : styles.card__button}>
                    {dateExpired ? "SOLD" : "J'achéte"}
                </a>
            </Link> */}
        </motion.div>

    )
}


export default Card