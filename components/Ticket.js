import styles from '../styles/ticket.module.css'
import Trash from './SVGs/trash'
import { useState } from 'react'



const Ticket = props => {
  const [showResults, setShowResults] = useState(true)
  const onClick = () => setShowResults(false)
  return (
    (showResults) ? (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={props.imgURL} alt="" />
      </div>
      {/*  */}
      <div className={styles.right}>
        <h1>{props.title}</h1>
        <h5>{props.sub}</h5>
        <p>Quantité</p>
        <div>
          <input type="number" placeholder={props.placeholder} min="1" />
          <div onClick={onClick}>
            <Trash />
          </div>
        </div>
      </div>
    </div>
  ) : null )
}


export default Ticket