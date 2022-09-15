import styles from '../styles/ticket.module.css'
import Trash from './SVGs/trash'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Ticket = props => {
  const [showResults, setShowResults] = useState(true)
  return (

    <>
      <AnimatePresence>

        {
          showResults &&

          <motion.div className={styles.container}
          
            exit = {{opacity : 0}}
          >
            <div className={styles.left}>
              <img src={props.imgURL} alt="" />
            </div>
            {/*  */}
            <div className={styles.right}>
              <h1>{props.title}</h1>
              <h5>{props.sub}</h5>
              <p>Quantité</p>
              <div>
                <input type="number" defaultValue={props.placeholder} min="1" />
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