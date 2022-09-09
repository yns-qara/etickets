import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Drop.module.css'
import ArrowDown from './SVGs/arrowDown'




const Drop = props => {

  const [showVille, setShowVille] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPrix, setShowPrix] = useState(false);
  
  const villeClick = () => {
    setShowVille(!showVille);

    if( showDate === false && showPrix === false)
      return;
    setShowDate(false);
    setShowPrix(false);
  }
  const dateClick = () => {
    setShowDate(!showDate);
    if( showVille === false && showPrix === false)
      return;
    setShowVille(false);
    setShowPrix(false);
  }
  const prixClick = () => {
    setShowPrix(!showPrix);
    if( showDate === false && showVille === false)
      return;
    setShowDate(false);
    setShowVille(false);
  }



  return (
    <section className={styles.drop}>
      <div className={styles.drop__container}>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}
            onClick={villeClick}
          >
            <span>Ville</span>
            <ArrowDown />
          </div>
          <AnimatePresence>
            {
              showVille
              &&
              <motion.div className={styles.drop__hidden}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                exit={{ opacity: 0 }}

              >
                <span>Arouit</span>
                <span>Nador</span>
                <span>casa</span>
                <span>knetra</span>
                <span>tanger</span>
                <span>rabat</span>
                <span>fes</span>
                <span>mohamadea</span>
              </motion.div>
            }
          </AnimatePresence>

        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}
            onClick={dateClick}
          >
            <span>Date</span>
            <ArrowDown />
          </div>
          <AnimatePresence>
            {
              showDate
              &&
              <motion.div className={styles.drop__hidden}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                exit={{ opacity: 0 }}

              >
                <span>Arouit</span>
                <span>Nador</span>
                <span>casa</span>
                <span>knetra</span>
                <span>tanger</span>
                <span>rabat</span>
                <span>fes</span>
                <span>mohamadea</span>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}
            onClick={prixClick} 
          >
            <span>Prix</span>
            <ArrowDown />
          </div>
          <AnimatePresence>
            {
              showPrix
              &&
              <motion.div className={styles.drop__hidden}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                exit={{ opacity: 0 }}

              >
                <span>Arouit</span>
                <span>Nador</span>
                <span>casa</span>
                <span>knetra</span>
                <span>tanger</span>
                <span>rabat</span>
                <span>fes</span>
                <span>mohamadea</span>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}>
            <span>Bientôt expiré</span>
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>

  )
}


export default Drop