import styles from '../styles/mestickets.module.css'


const MesTickets = props => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

MesTickets.propTypes = {}

export default MesTickets