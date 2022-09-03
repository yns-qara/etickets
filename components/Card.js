import styles from '../styles/card.module.css'
import SvgHour from '../components/SVGs/hour'
const Card = ({imgURL}) => {
    return (
        <div className={styles.card__container}>

            <div className={styles.card__upper}>
                <img src={imgURL} alt="" />
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
                        <SvgHour />
                        <span>
                            <span className={styles.counter_j} id={styles.change_c}>19</span><span>j</span>
                            <span className={styles.counter_h} id={styles.change_c}>00</span><span>h</span>
                            <span className={styles.counter_m} id={styles.change_c}>19</span><span>m</span>
                            <span className={styles.counter_s} id={styles.change_c}>41</span><span>s</span>
                        </span>
                    </div>
                </div>
                <div className={styles.card__lower_right}>
                    <img src="/goldLogo.png" alt="" />
                    <div className={styles.card__price_item}>
                        <span>À partir de :</span>
                        <div>200MAD</div>
                    </div>
                </div>
            </div>
            <a className={styles.card__button} href="#">J’achéte</a>
        </div>

    )
}


export default Card