
import Pencil from './SVGs/pencil'
import styles from '../styles/input.module.css'
import { useState } from 'react';
const Input = ({ID,label,type,placeholder}) => {

  const [togle, setTogle] = useState(true)

  const handleClick = () => {
    setTogle(!togle)
  };


  return (



    <div className={styles.container}>
      <label htmlFor={ID}>{label} : </label>
      <input
        type={type}
        id={ID}
        // placeholder={togle && placeholder}
        defaultValue={placeholder}
        readOnly = {togle && "true"}
           />

      <div className={styles.penHolder} onClick={handleClick}>
        <Pencil className={styles.pencil} />
      </div>

    </div>





  )
}


export default Input