import styles from '../../styles/Drop.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const Ville = ({ showVille, setActiveVille, setShowVille }) => {
    return (
        <AnimatePresence>
            {
                showVille
                &&
                <motion.div className={styles.drop__hidden}
                    initial={{ opacity: 0, zIndex: 100 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    exit={{ opacity: 0 }}

                >
                    <span onClick={() => { setActiveVille(""); setShowVille(!showVille); }}>Tout les viles</span>
                    <span onClick={() => { setActiveVille("Nador"); setShowVille(!showVille); }}>Nador</span>
                    <span onClick={() => { setActiveVille("Casa"); setShowVille(!showVille); }}>Casa</span>
                    <span onClick={() => { setActiveVille("Rabat"); setShowVille(!showVille); }}>rabat</span>
                    <span onClick={() => { setActiveVille("Fes"); setShowVille(!showVille); }}>fes</span>
                    <span onClick={() => { setActiveVille("Marrakech"); setShowVille(!showVille); }}>Marrakech</span>
                    <span onClick={() => { setActiveVille("Knetra"); setShowVille(!showVille); }}>Knetra</span>
                </motion.div>
            }
        </AnimatePresence>
    )
}


export default Ville