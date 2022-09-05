import styles from '../styles/HoldContact.module.css'
const HoldContact = props => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}


export default HoldContact