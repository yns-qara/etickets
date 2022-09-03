
import Pencil from './SVGs/pencil'
import styles from '../styles/input.module.css'
import { useState } from 'react';

const Input = props => {

  const [isDisabled, setIsDisabled] = useState("");

  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };


  return (
    <div className={styles.test}>



      <div className={styles.input__container}>
        <label htmlFor={props.ID}>{props.label} : </label>
        <input
          type={props.type}
          id={props.ID}
          placeholder={props.placeholder}
          readOnly />

        <div className={styles.penHolder} onClick={handleClick}>
            <Pencil className={styles.pencil} />
        </div>

      </div>





    </div>
  )
}


export default Input