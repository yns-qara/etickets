
import Pencil from './SVGs/pencil'
import styles from '../styles/input.module.css'
import { useState } from 'react';
const Input = ({ ID, label, type, placeholder, setNom, setPrenom, setEmail, setTele }) => {

  const [togle, setTogle] = useState(true)

  const handleClick = () => {
    setTogle(!togle)
  };

  const handleChange = (e) => {
    if (type === "text") {
      if (label === "Nom") {
        setNom(e.target.value);
      } else {
        setPrenom(e.target.value);
      }
    } else if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "tel") {
      setTele(e.target.value);
    }
  }



  return (



    <div className={styles.container}>
      <label htmlFor={ID}>{label} : </label>
      <input
        onChange={handleChange}
        type={type}
        id={ID}
        defaultValue={placeholder}
        readOnly={togle && "true"}
        className={!togle && styles.active}
      />

      <div className={styles.penHolder} onClick={handleClick}>
        <Pencil className={styles.pencil} />
      </div>

    </div>

  )
}


export default Input