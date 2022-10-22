import styles from '../styles/ModeDePayment.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
const ModeDePayment = props => {

  const [virement, setVirement] = useState(false);
  const [cashPlus, setCashPlus] = useState(false);
  const [carteB, setCarteB] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [required, setRequired] = useState(true);

  useEffect(()=>{

    if( carteB ){
      setVirement(false);
      setCashPlus(false);
    }if( virement ){
        setCarteB(false);
        setCashPlus(false);
    }if( cashPlus ){
      setVirement(false);
      setCarteB(false);
    }


  },[carteB,virement,cashPlus])

  return (

    <div className={styles.container}>

      <h1>Mode de paiement</h1>
      <h4>Sélectionez votre moyen de paiement</h4>

      <div className={styles.payment}>
        <div className={styles.inpt}>
          <div
            className={carteB ? styles.circle_active : styles.circle}
            onClick={() => setCarteB(!carteB)}></div>
          <div>Carte bancaire</div>
        </div>
        {carteB &&
          <>
            <p id={styles.s_option}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi veniam porro quaerat, debitis architecto libero molestiae saepe nesciunt nostrum?</p>
          </>
        }

        <div className={styles.inpt}>
          <div
            className={virement ? styles.circle_active : styles.circle}
            onClick={() => setVirement(!virement)}></div>
          <label>Virement / Versement</label>

        </div>
        {virement &&
          <>
            <p id={styles.s_option}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi veniam porro quaerat, debitis architecto libero molestiae saepe nesciunt nostrum?</p>
          </>
        }

        <div className={styles.inpt}>
          <div
            className={cashPlus ? styles.circle_active : styles.circle}
            onClick={() => setCashPlus(!cashPlus)}></div>
          <label>Cashplus</label>

        </div>
        {cashPlus &&
          <>
            <p id={styles.s_option}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi veniam porro quaerat, debitis architecto libero molestiae saepe nesciunt nostrum?</p>
            <br />
          </>
        }


        <div className={styles.inpt} >
          <div
            id={styles.terms}
            className={conditions ? styles.circle_active : styles.circle}
            onClick={() => setConditions(!conditions)}></div>

          <label>
            <Link href="#">
              <span> J’ai lu <a>les conditions générales de ventes et j’accepte</a></span>
            </Link>
          </label>
        </div>

      </div>
    </div>
  )
}


export default ModeDePayment