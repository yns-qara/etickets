import styles from '../styles/finaliser.module.css'
import Cross from '../components/SVGs/cross'
import { motion } from 'framer-motion'
import Image from 'next/image'
const Finaliser = ({ toggle, setToggle }) => {

    return (

        <div className={styles.cont}>
            <motion.div className={styles.parent}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .4 }}
            >
                <h1>FIFA World Cup QATAR 2022</h1>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Image src="/qatar.png" width={461} height={263} alt="finaliser" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.header}>
                            <span>Prix</span>
                            <span>Quantite</span>
                            <span>Total</span>
                        </div>
                        <div className={styles.infos}>
                            <span>30MAD</span>
                            <span>1</span>
                            <span>30MAD</span>
                        </div>
                        <div className={styles.buttons}>
                            <button>CONTINUER MES ACHATS</button>
                            <button>FINALISER MA COMMANDE</button>
                        </div>
                    </div>
                </div>
                <div onClick={() => setToggle(!toggle)}>
                    <Cross />
                </div>

            </motion.div>

            <div className={styles.background}></div>
        </div>



    )
}


export default Finaliser