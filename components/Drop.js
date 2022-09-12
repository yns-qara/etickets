import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Drop.module.css'
import ArrowDown from './SVGs/arrowDown'




const Drop = ({ AllEvents, setFiltredEvents, activeVille, setActiveVille, activeDate, setActiveDate, activePrix, setActivePrix, expriredSoon, setExpriredSoon }) => {
  /* -------------------------------------------------------------------------------- */

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

  /* -------------------------------------------------------------------------------- */


  useEffect(() => {
    const filtred = [];
    if (activeVille === "") {

      if (activePrix === 0) {
        setFiltredEvents(AllEvents);
      }
      else {
        filtred = AllEvents.filter((event) => event.price.includes(activePrix));
        setFiltredEvents(filtred);
      }
      return;
    }
    else {
      if (activePrix === 0) {
        filtred = AllEvents.filter((event) => event.city.includes(activeVille));
      } else {
        filtred = AllEvents.filter((event) => event.city.includes(activeVille));
        filtred = filtred.filter((event) => event.price.includes(activePrix));
      }
    }


    // const filtred = AllEvents.filter((event) => event.city.includes(activeVille));
    setFiltredEvents(filtred);


  }, [activeVille, activePrix])


  /*
   useEffect(() => {
      if (activeVille === "") {
        setFiltredEvents(AllEvents);
        return;
      }
      const filtred = AllEvents.filter((event) => event.city.includes(activeVille));
      setFiltredEvents(filtred);
  
      
    }, [activeVille])
  
  */


  const rightCity = () => {
    if (activeVille === "") return "Ville"
    else if (activeVille === "Nador") return "Nador"
    else if (activeVille === "Marrakech") return "Marrakech"
    else if (activeVille === "Knetra") return "Knetra"
    else if (activeVille === "Rabat") return "Rabat"
    else if (activeVille === "Fes") return "Fes"
    else if (activeVille === "Casa") return "Casa"
  }

  const rightPrice = () => {
    if (activePrix === 0) return "Prix"
    else if (activePrix === 100) return "100 MAD"
    else if (activePrix === 150) return "150 MAD"
    else if (activePrix === 200) return "200 MAD"
    else if (activePrix === 250) return "250 MAD"
    else if (activePrix === 300) return "300 MAD"
    else if (activePrix === 350) return "350 MAD"
    else if (activePrix === 400) return "400 MAD"
  }

  /* -------------------------------------------------------------------------------- */


  return (
    <section className={styles.drop}>
      <div className={styles.drop__container}>
        <div className={styles.drop__element}>
          <div className={activeVille === "" ? styles.drop__element_container : styles.active }
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
                <span onClick={() => { setActiveVille(""); setShowVille(!showVille); }}>Tout les viles</span>
                <span onClick={() => { setActiveVille("Nador"); setShowVille(!showVille); }}>Nador</span>
                <span onClick={() => { setActiveVille("Casa"); setShowVille(!showVille); }}>Casa</span>
                <span onClick={() => { setActiveVille("Tanger"); setShowVille(!showVille); }}>tanger</span>
                <span onClick={() => { setActiveVille("Rabat"); setShowVille(!showVille); }}>rabat</span>
                <span onClick={() => { setActiveVille("Fes"); setShowVille(!showVille); }}>fes</span>
                <span onClick={() => { setActiveVille("Marrakech"); setShowVille(!showVille); }}>Marrakech</span>
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
                <span onClick={() => setActiveDate("")}>this week</span>
                <span onClick={() => setActiveDate("")}>this month</span>
                <span onClick={() => setActiveDate("")}>next month</span>
                <span onClick={() => setActiveDate("")}>next 2 months</span>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className={styles.drop__element}>
          <div className={activePrix === 0 ? styles.drop__element_container : styles.active }
            onClick={prixClick}
          >
            <span>
              {
                rightPrice()
              }
            </span>
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
                <span onClick={() => {setActivePrix(0);setShowPrix(!showPrix)}}>all</span>
                <span onClick={() => {setActivePrix(100);setShowPrix(!showPrix)}}>100 MAD</span>
                <span onClick={() => {setActivePrix(150);setShowPrix(!showPrix)}}>150 MAD</span>
                <span onClick={() => {setActivePrix(200);setShowPrix(!showPrix)}}>200 MAD</span>
                <span onClick={() => {setActivePrix(250);setShowPrix(!showPrix)}}>250 MAD</span>
                <span onClick={() => {setActivePrix(300);setShowPrix(!showPrix)}}>300 MAD</span>
                <span onClick={() => {setActivePrix(350);setShowPrix(!showPrix)}}>350 MAD</span>
                <span onClick={() => {setActivePrix(400);setShowPrix(!showPrix)}}>400 MAD</span>
                <span onClick={() => {setActivePrix(999);setShowPrix(!showPrix)}}>plus de 400 MAD</span>
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