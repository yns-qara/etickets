import styles from '../styles/voirPlus.module.css'
const VoirPlusButton = props => {
    return (
        <div className={styles.button_parrent}>
            <button className={styles.button_child}> Voir plus </button>
        </div>
    )
}


export default VoirPlusButton