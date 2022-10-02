
import Pencil from './SVGs/pencil'
import styles from '../styles/input.module.css'
import { useState } from 'react';

const Input = props => {

  const [togle, setTogle] = useState(true)

  const handleClick = () => {
    setTogle(!togle)
  };


  return (



    <div className={styles.container}>
      <label htmlFor={props.ID}>{props.label} : </label>
      <input
        type={props.type}
        id={props.ID}
        // placeholder={togle && props.placeholder}
        defaultValue={props.placeholder}
        readOnly = {togle && "true"}
           />

      <div className={styles.penHolder} onClick={handleClick}>
        <Pencil className={styles.pencil} />
      </div>

    </div>





  )
}


export default Input