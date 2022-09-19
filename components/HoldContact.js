import styles from '../styles/HoldContact.module.css'
const HoldContact = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}


export default HoldContact