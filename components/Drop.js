import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Drop.module.css'
import ArrowDown from './SVGs/arrowDown'




const Drop = ({ AllEvents, setFiltredEvents, activeVille, setActiveVille }) => {

  const [showVille, setShowVille] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPrix, setShowPrix] = useState(false);





  const villeClick = () => {
    setShowVille(!showVille);

    if (showDate === false && showPrix === false)
      return;
    setShowDate(false);
    setShowPrix(false);
  }
  const dateClick = () => {
    setShowDate(!showDate);
    if (showVille === false && showPrix === false)
      return;
    setShowVille(false);
    setShowPrix(false);
  }
  const prixClick = () => {
    setShowPrix(!showPrix);
    if (showDate === false && showVille === false)
      return;
    setShowDate(false);
    setShowVille(false);
  }


  useEffect(() => {
    if (activeVille === "") {
      setFiltredEvents(AllEvents);
      return;
    }
    const filtred = AllEvents.filter((event) => event.city.includes(activeVille));
    setFiltredEvents(filtred);
  }, [activeVille])


  const rightCity = () =>{
    if( activeVille === "") return "Ville"
    else if( activeVille === "Nador") return "Nador"
    else if( activeVille === "Marrakech") return "Marrakech"
    else if( activeVille === "Knetra") return "Knetra"
    else if( activeVille === "Rabat") return "Rabat"
    else if( activeVille === "Fes") return "Fes"
  }

  return (
    <section className={styles.drop}>
      <div className={styles.drop__container}>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}
            onClick={villeClick}
          >
            <span>
              {
                rightCity()
              }
              </span>
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
                <span onClick={() => {setActiveVille(""); setShowVille(!showVille);}}>Tout les viles</span>
                <span onClick={() => {setActiveVille("Nador"); setShowVille(!showVille);}}>Nador</span>
                <span onClick={() => {setActiveVille("Casa"); setShowVille(!showVille);}}>Casa</span>
                <span onClick={() => {setActiveVille("Knetra"); setShowVille(!showVille);}}>knetra</span>
                <span onClick={() => {setActiveVille("Tanger"); setShowVille(!showVille);}}>tanger</span>
                <span onClick={() => {setActiveVille("Rabat"); setShowVille(!showVille);}}>rabat</span>
                <span onClick={() => {setActiveVille("Fes"); setShowVille(!showVille);}}>fes</span>
                <span onClick={() => {setActiveVille("Marrakech"); setShowVille(!showVille);}}>Marrakech</span>
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