import styles from '../styles/infoHolder.module.css'
const infoHolder = props => {
  return (
    <form>
        <h1 className={styles.h}>Mes informations</h1>
        {props.children}
        <button type="submit"></button>
        <button type="reset"></button>
    </form>
  )
}


export default infoHolder