import styles from '../styles/cardJachete.module.css'
import Messenger from './SVGs/messenger'
import Watsapp from './SVGs/watsup'
import Twitter from './SVGs/twitter'
import Pan from './SVGs/pan'
import SvgHour from'./SVGs/SvgHour'
const CardJachete = props => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="/qatar.png" alt="" />
            </div>
            <div className={styles.right}>
                <h1>Mardi 30 Novembre 2021</h1>
                <h2>Doha / Ouverture des portes à 15:42</h2>
                {/* to be changed with checkbox trick or
                    figure out onlclick trick
                */}
                <select name="" id="">
                    <option value="" className={styles.spn}>
                        <span >Pack 1</span> 
                        <span>10 000MAD</span>
                    </option>
                    <option value="" className={styles.spn}>
                        <span >Pack 1</span> 
                        <span>10 000MAD</span>
                    </option>
                    <option value="" className={styles.spn}>
                        <span >Pack 1</span> 
                        <span>10 000MAD</span>
                    </option>
                </select>
                {/* -------end---------- */}


                <div className={styles.button_holder}>
                    <input type="number" placeholder="1" />
                    <button>
                        <Pan />
                        <span>ACHETER MAINTENANT</span>
                    </button>
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
                <h4>PARTAGEZ CET ÉVÉNEMENT</h4>
                <div className={styles.social_media}>
                    <Messenger />
                    <Watsapp />
                    <Twitter />
                </div>
            </div>
        </div>
    )
}


export default CardJachete