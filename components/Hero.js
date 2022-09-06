import styles from '../styles/Hero.module.css'



const Hero = props => {


    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__left}>
                    <h1>
                        Plus d’<span>evenements</span> que tu aimes
                    </h1>
                    <div className={styles.hero__buttons}>
                        <a href="#" className={styles.btn}>
                            sport
                        </a>
                        <a href="#" className={styles.btn}>
                            THEATRE
                        </a>
                        <a href="#" className={styles.btn}>
                            HUMOUR
                        </a>
                        <a href="#" className={styles.btn}>
                            CONCERT
                        </a>
                        <a href="#" className={styles.btn}>
                            FESTIVAL
                        </a>
                        <a href="#" className={styles.btn}>
                            FORMATION
                        </a>
                        <a href="#" className={styles.btn}>
                            EVENEMENT
                        </a>
                        <a href="#" className={styles.btn}>
                            CINEMA
                        </a>
                        <a href="#" className={styles.btn}>
                            LOISIRS
                        </a>
                        <a href="#" className={styles.btn}>
                            SHOPPING
                        </a>
                    </div>
                </div>
                <div className={styles.hero__right}>
                    <div className={styles.hero__slider}>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                        <div>
                            <img src="../herocard1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

Hero.propTypes = {}

export default Hero