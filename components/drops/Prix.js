import styles from '../../styles/Drop.module.css'
import { motion, AnimatePresence } from 'framer-motion'


const Prix = ({ showPrix , setActivePrix , setShowPrix }) => {
    return (
        <AnimatePresence>
            {
                showPrix
                &&
                <motion.div className={styles.drop__hidden}
                    initial={{ opacity: 0, zIndex: 96 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    exit={{ opacity: 0 }}

                >
                    <span onClick={() => { setActivePrix(0); setShowPrix(!showPrix) }}>all</span>
                    <span onClick={() => { setActivePrix(100); setShowPrix(!showPrix) }}>100 MAD</span>
                    <span onClick={() => { setActivePrix(150); setShowPrix(!showPrix) }}>150 MAD</span>
                    <span onClick={() => { setActivePrix(200); setShowPrix(!showPrix) }}>200 MAD</span>
                    <span onClick={() => { setActivePrix(250); setShowPrix(!showPrix) }}>250 MAD</span>
                    <span onClick={() => { setActivePrix(300); setShowPrix(!showPrix) }}>300 MAD</span>
                    <span onClick={() => { setActivePrix(350); setShowPrix(!showPrix) }}>350 MAD</span>
                    <span onClick={() => { setActivePrix(400); setShowPrix(!showPrix) }}>400 MAD</span>
                </motion.div>
            }
        </AnimatePresence>
    )
}


export default Prix