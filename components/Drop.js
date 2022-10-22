import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Drop.module.css'
import ArrowDown from './SVGs/arrowDown'
import CommingSoon2 from './CommingSoon2'

import Ville from './drops/Ville'
import DateDrop from './drops/Date'
import Prix from './drops/Prix'

const Drop = ({ AllEvents, setFiltredEvents, activeVille, setActiveVille, activeDate, setActiveDate, activePrix, setActivePrix, expriredSoon, setExpriredSoon }) => {
  /* -------------------------------------------------------------------------------- */

  const [showVille, setShowVille] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPrix, setShowPrix] = useState(false);
  const [active2, setActive2] = useState(false);

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

  const expiredClick = () => {
    setExpriredSoon(!expriredSoon);
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


  }, [activeVille, activePrix, AllEvents, setFiltredEvents])


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
    <>
      <section className={styles.drop}>
        <div className={styles.drop__container}>
          <div className={styles.drop__element}>
            <motion.div
              animate={{ zIndex: "99999" }}
              className={activeVille === "" ? styles.drop__element_container : styles.active}
              onClick={villeClick}
            >
              <span>
                {
                  rightCity()
                }
              </span>
              <ArrowDown />
            </motion.div>

            <Ville showVille={showVille} setShowVille={setShowVille} setActiveVille={setActiveVille} />
          </div>
          <div className={styles.drop__element}>
            <motion.div
              animate={{ zIndex: "999" }}
              className={styles.drop__element_container}
              onClick={dateClick}
            >
              <span>Date</span>
              <ArrowDown />
            </motion.div>

            <DateDrop showDate={showDate} setActiveDate={setActiveDate} />
          </div>
          <div className={styles.drop__element}>
            <motion.div
              animate={{ zIndex: "99" }}
              className={activePrix === 0 ? styles.drop__element_container : styles.active}
              onClick={prixClick}
            >
              <span>
                {
                  rightPrice()
                }
              </span>
              <ArrowDown />
            </motion.div>
            <Prix showPrix={showPrix} setActivePrix={setActivePrix} setShowPrix={setShowPrix} />
          </div>
          <div className={styles.drop__element}

            //  onClick={expiredClick}
            onClick={() => setActive2(true)}
          >
            <motion.div

              className={expriredSoon ? styles.active : styles.drop__element_container}>
              <span>Bientôt expiré</span>
              <div className={styles.circle}>
                {/* {
                expriredSoon &&
                <div className={styles.inner_c}></div>
              } */}

              </div>
            </motion.div>
          </div>
        </div>

      </section>
      {
        active2 && <CommingSoon2 setActive2={setActive2} title="this feature is not yet implemented" />
      }
    </>

  )
}


export default Drop