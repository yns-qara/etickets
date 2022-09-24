import styles from '../styles/voirPlus.module.css'
const VoirPlusButton = ({limit,setLimit}) => {
    return (
        <div className={styles.button_parrent}>
            <button className={styles.button_child} onClick={()=>setLimit(limit+8)}> Voir plus </button>
        </div>
    )
}


export default VoirPlusButton