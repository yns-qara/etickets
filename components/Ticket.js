import styles from '../styles/ticket.module.css'
import Trash from './SVGs/trash'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Plus from "../components/SVGs/plus"

const Ticket = props => {
  const [showResults, setShowResults] = useState(true);
  const [increment, setIncrement] = useState(1);

  return (

    <>
      <AnimatePresence>

        {
          showResults &&

          <motion.div className={styles.container}

            exit={{ opacity: 0 }}
          >
            <div className={styles.left}>
              <Image src={props.imgURL} width={340} height={220} alt="card" />
            </div>
            <div className={styles.right}>
              <h1>{props.title}</h1>
              <h5>{props.sub}</h5>
              <p>Quantité</p>
              <div className={styles.right_c}>
                <div  className={styles.button_holder}>
                  {/* <div>-</div>
                  <input type="number" defaultValue={props.placeholder} min="1" />
                  <div>+</div> */}

                  <div>
                    <span
                      onClick={
                        () => {
                          if (increment != 1) {

                            setIncrement(increment - 1)
                          }
                        }
                      }
                    >-</span>
                    <input type="number" value={increment} min="1" />
                    <div
                      onClick={
                        () => {
                          setIncrement(increment + 1)
                        }
                      }
                    >
                      {/* <Plus /> */}
                      <div>+</div>
                    </div>
                  </div>


                </div>
                <div onClick={() => setShowResults(false)}>
                  <Trash />
                </div>
              </div>
            </div>
          </motion.div>

        }
      </AnimatePresence>
    </>
  )
}


export default Ticket