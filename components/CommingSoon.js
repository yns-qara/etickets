
import styles from '../styles/CommingSoon.module.css'

const CommingSoon = ({ setActive }) => {
    return (
        <>
            <div className={styles.container}>
                <h1>comming soon</h1>
                <p id={styles.par}>this feature is not yet implemented</p>
                <button onClick={() => setActive(false)}>got it</button>
            </div>
            <div className={styles.shadow}>
            </div>
        </>
    )
}


export default CommingSoon