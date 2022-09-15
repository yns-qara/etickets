import styles from '../styles/Cbutton.module.css'
const ControlButtons = props => {
  return (
    <div className={styles.parent}>
        {props.children}
    </div>
  )
}


export default ControlButtons